
import User from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const getProfile = async (req, res) => {
    try {
        const getdata = await User.find({})
        res.json(getdata)
    } catch (error) {
        res.status(500).json({ message: error.message });

    }

}

const register = async (req, res) => {
    try {

        const { name, email, password, role, age, profilePic } = req.body

        if (!name || !email || !password || !role || !age) {
            return res.status(400).json(
                {
                    message: "all feild  must be required",
                    success: false
                })
        }


        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already exists with this email", success: false })

        }

        const hashpassword = await bcrypt.hash(password, 10);

        const newUser = User.create({
            name,
            email,
            password: hashpassword,
            role,
            age,
            profilePic
        })
        return res.status(201).json({
            message: "user created successfully",
            user: newUser,
            success: true

        })

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });

    }

}

const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;


        if (!email || !password || !role) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            });
        }


        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({
                message: "Incorrect password",
                success: false
            });
        }

        if (role !== user.role) {
            return res.status(400).json({
                message: "Account doesn't exist with current role",
                success: false
            });
        }


        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: "1d" });


        user = {
            _id: user._id,
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        };


        return res
            .status(200)  // Set HTTP status code to 200 OK
            .cookie("token", token, {   // Set a cookie named "token"
                maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day in milliseconds
                httpOnly: true  // Secure: can't be accessed from frontend JavaScript
            })
            .json({   // Send JSON response body
                message: `Welcome back ${user.name}`,
                user: user,
                success: true
            });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
            success: false
        });
    }
};




const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "logged out successfully",
            success: true
        })

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}

const updateProfile = async (req, res) => {
  try {
    const { name, email, age, profilePic } = req.body;
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (name) user.name = name;
    if (email) user.email = email;
    if (age) user.age = age;
    if (profilePic) user.profilePic = profilePic;

    await user.save();

    res.json({
      message: "Profile updated successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export { getProfile, register, login, logout, updateProfile };