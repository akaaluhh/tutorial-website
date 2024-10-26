import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = new Schema({
    email: { type: String, unique: true, required: "Your email is required!" },
    password: { type: String, max: 25, select: false, required: true },
    username: { type: String, required: true },
    role: { type: String, required: true, enum: ['teacher', 'student'] }
});

User.pre("save", function (next)
{
    const user = this;

    if (!user.isModified("password")) return next();
    bcrypt.genSalt(10, (err, salt) =>
    {
        if (err)
            return next(err);
        bcrypt.hash(user.password, salt, (err, hash) =>
        {
            if (err)
                return next(err);

            user.password = hash;
            next();
        });
    });
});

const userModel = mongoose.model('user', User);

export { userModel };