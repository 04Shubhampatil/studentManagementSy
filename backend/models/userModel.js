import mongoose, { Schema } from 'mongoose';


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        unique: true,
    },
    profilePic: {
        type: String,
        default: "https://imgs.search.brave.com/mLdZqnxvpEgEwGRT4emQD4UNilL6X0o6VTlJEW71SNQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS12/ZWN0b3IvdXNlci1w/cm9maWxlLWljb24t/dmVjdG9yLWF2YXRh/ci0yNjBudy0yMjIw/NDMxMDQ1LmpwZw"
    },
    role: {
        type: String,
        enum: ['admin', 'student'],
        default: 'user',
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now

    },

}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;