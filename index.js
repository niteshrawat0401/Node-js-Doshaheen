const express = require("express");
const userRouter = require("./Routes/userdata");
const connect = require("./db/db");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/register", userRouter);
app.get("/", (req, res) => res.send("hello"));

app.listen(8080, async () => {
    await connect;
    console.log("Server started on http://localhost:8080");
});
