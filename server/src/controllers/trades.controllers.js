import { getTradesByUserId } from "../repository/trades.repository.js";

export const getUserTrades = async (req, res) => {
  if (req.isAuthenticated()) {
    try {
      const trades = await getTradesByUserId(req?.user?.user_id);
      res.status(200).json({ status: 200, message: "All trades", trades });
    } catch (error) {
      res.status(500).json({ status: 500, message: error.message });
    }
  } else {
    return res.status(401).json({ status: 401, message: "Unauthorized! Please login." });
  }
};
