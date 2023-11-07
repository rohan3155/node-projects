import Schema from "../../Modal/Admin/Signup.js";
// import bcrypt from 'bcrypt';

export const addUser = async (req, res) => {

    setTimeout(async () => {
        await new Schema(req.body)
            .save()
            .then(() => {
            res.send("Your Sign Up was successful , now you can login");
            })
            .catch((err) => {
                res.send(`error: ${err}`);
            });
    }, 800);
}