const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");
const colors = require("colors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewear/errorMiddleware");
dotenv.config();

connectDB();
const app = express();
app.use(express.json()); //as it accepts data from frontend
//to accept json data

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRoutes);


app.use(notFound)
app.use(errorHandler)
// app.get('/api/chat',(req,res)=>{
//     res.send(chats);
// })

// app.get("/api/chat/:id", (req, res) => {
// //   console.log(req.params.id);
// const singleChat=chats.find((c)=>c._id==req.params.id);
// res.send(singleChat);
// });
// app.listen(5000,)
const PORT = process.env.PORT || 5000;
app.listen(`${PORT}`, console.log(`Server Started on ${PORT}`.yellow.bold));
