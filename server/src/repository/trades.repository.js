import { getPool } from "../db/index.js";

export const getTradesByUserId = async (userId) => {
  const query = "select * from trades where user_id = $1";
  const { rows } = await getPool().query(query, [userId]);
  return rows || [];
};
