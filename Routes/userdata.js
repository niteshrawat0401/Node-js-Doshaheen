const {Router} = require("express");
const User= require("../model/user");

const userRouter= Router();

userRouter.post("/", async(req,res)=>{
    const newuser= await new User(req.body);
    newuser.save((err, success)=>{
        try {
            return res.status(201).send({
              success: true,
              message: "Data successfully post",
              newuser: success["_doc"],
            });
          } catch (error) {
            return res.status(500).send({ message: "Something wen wrong" });
          }
    })
})

module.exports= userRouter;