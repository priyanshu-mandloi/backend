import authRoute from "./routes/auth.route.js"
import chatRoute from "./routes/chat.route.js";
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from 'dotenv';
import express from "express";
import messageRoute from "./routes/message.route.js";
import postRoute from "./routes/post.route.js" ;
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";

dotenv.config();
const app = express();
// Set up of the cors
app.use(cors({origin:"https://pmrealestate-priyanshu-mandlois-projects.vercel.app",credentials:true}));
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hello, the server is running!");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

app.listen(8800, () => {
  console.log("Server is running on port 8800!");
});
