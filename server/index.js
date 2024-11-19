import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "./src/utils/passport.js";

import tradesRoutes from "./src/routes/trades.routes.js";
import authRoutes from "./src/routes/auth.routes.js";

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

// Express Session Setup
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

// Passport Initialization
app.use(passport.initialize());
app.use(passport.session());

app.get("/ping", (req, res) => res.json({ message: "pong" }));

// routes
app.use("/api/v1/trades", tradesRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
