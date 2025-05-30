import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import matchRoutes from "./src/routes/matchRoutes.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    // credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use(express.json());



app.use("/api/matches", matchRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
