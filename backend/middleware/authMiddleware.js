import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    try {
        // 1. Get token from cookies
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "No token, authorization denied",
                success: false
            });
        }

        // 2. Verify token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        // 3. Attach user data to request
        req.user = decoded;

        next(); // proceed to the next middleware/controller
    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token",
            success: false
        });
    }
};

export default authMiddleware;
