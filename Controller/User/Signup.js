import Schema from "../../Modal/User/Signup.js";
// import bcrypt from 'bcrypt';

export const addUser = async (req, res) => {
    // console.log(req.body)
    // console.log(req.body.firstnamr)
    // console.log(req.body.token)
    // console.log(req.body.firstname)
    let fname = req.body.firstname;
    setTimeout(async () => {
        await new Schema(req.body)
            .save()
            .then(() => {
                res.status(200).json({
                    result:"Your Sign Up was successful , now you can login",
                    token:req.body.token,
                    name:fname,

                })
            })
            .catch((err) => {
                res.send(`error: ${err}`);
            });
    }, 800);
}