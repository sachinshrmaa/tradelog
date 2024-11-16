import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import tradesRoutes from "./src/routes/trades.routes.js";

// config
dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 5000;

app.use(express.json());
app.use(cookieParser());

// CORS middleware
const allowedOrigins = ["http://localhost:3000"];

// CORS options
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.get("/ping", (req, res) => res.json({ message: "pong" }));

// routes
app.use("/api/v1/trades", tradesRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
