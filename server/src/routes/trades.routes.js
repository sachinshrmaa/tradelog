import { Router } from "express";
import { getUserTrades } from "../controllers/trades.controllers.js";

const router = Router();

router.get("/", getUserTrades);

export default router;
