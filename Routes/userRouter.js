const { Router } = require("express");
const User = require("../model/user");

const userRouter = Router();

userRouter.post("/", async (req, res) => {
  // const newuser = await new User(req.body);
  const newUser= req.body;
  if(!newUser.name||!newUser.mobile||newUser.DOB){
    return res.status(422).send({message:"fill all the mandatory feilds"})
  }

  // 422-unprocessable entity;
  if(newUser.mobile.length!=10){
    return res.status(422).send({message:"mobile no.should be of 10 digita"})
  }
  newUser.save((err, success) => {
    try {
      return res.status(201).send({
        success: true,
        message: "Data successfully post",
        newuser: success["_doc"],
      });
    } catch (error) {
      return res.status(500).send({ message: "Something went wrong" });
    }
  });
});

userRouter.post("/user", async (req, res) => {
  const { name, mobile } = req.body;

  const correctUser = await User.find({ name, mobile });

  try {
    if (correctUser && name == "Nitesh" && mobile == 124567895) {
      res
        .status(201)
        .send({ correctUser, success: true, message: "successfull" });
    } else {
      res
        .status(401)
        .send({ success: false, message: "Please fill correct detail" });
    }
  } catch (error) {
    res.status(error);
  }
});

module.exports = userRouter;
