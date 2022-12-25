const express = require("express");
const userRouter = require("./Routes/userRouter");
const connect = require("./db/db");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/register", userRouter);
app.get("/", (req, res) => res.send("hello"));

app.listen(8080, async () => {
   try{
    await connect;
    console.log("Server started on http://localhost:8080");
   }catch(err){
    console.log("error while listening", err)
   }
});



/**
 * _id : OBJECT(27358248763sjhhfsf)
 */