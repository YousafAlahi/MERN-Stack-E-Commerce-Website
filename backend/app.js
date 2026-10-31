
import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import dotenv from "dotenv";

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";


dotenv.config({
  path : './env'
});
const app = express();
const port = process.env.PORT || 3000;


// Middleware
app.use(cors());
app.use(express.json());


// // Test API
// app.get("/api/health", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "YousufBin backend is running!",
//   });
// });

app.get("/", (req, res) => {
  res.send("E-commerce API is running!");
});

//routes 
app.use("/api/products", productRoutes);

app.listen(port, () => {
  connectDB()
  console.log(`API are running on port ${port}`);
});

 export default app;
