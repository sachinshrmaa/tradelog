import { fetchTradesByUserId } from "../repository/trades.repository.js";

const getUserTrades = async (req, res) => {
  // const userId = req.user.user_id;
  const userId = req.body.userId;
  if (!userId) {
    return res.status(401).json({ message: "Unauthorized! Please login." });
  }
  try {
    const trades = await fetchTradesByUserId(userId);
    res.status(200).json({ message: "All trades", trades });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getUserTrades };
