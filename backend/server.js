const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const connectDB=require("./config/db");
dotenv.config();
connectDB();
const app=express();
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
res.send("StartupSphere Backend Running");
});
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
console.log(`Server running on ${PORT}`);
});


const User=require("./models/User");
app.get("/test-user",async(req,res)=>{
const user=
await User.create({
name:"Test Founder",
email:"test@gmail.com",
password:"123456",
role:"founder"
});
res.json(user);
});