const { Router } = require("express");
const User = require("../model/user");

const userRouter = Router();

userRouter.post("/", async (req, res) => {
  const newuser = await new User(req.body);
  newuser.save((err, success) => {
    try {
      return res.status(201).send({
        success: true,
        message: "Data successfully post",
        newuser: success["_doc"],
      });
    } catch (error) {
      return res.status(500).send({ message: "Something wen wrong" });
    }
  });
});
// vishalpandita@doshaheen.com
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
