import { getPool } from "../db/index.js";

export const getUserByEmail = async (email) => {
  const query = `SELECT * FROM Users WHERE email = $1`;
  const { rows } = await getPool().query(query, [email]);
  return rows[0] || null;
};

export const getUserById = async (userId) => {
  const query = `SELECT * FROM Users WHERE user_id = $1`;
  const { rows } = await getPool().query(query, [userId]);
  return rows[0] || null;
};

export const createUser = async (userData) => {
  const query = `INSERT INTO Users (user_id, name, email, password, social_signin) VALUES ($1, $2, $3, $4, $5) RETURNING *`;

  const { rows } = await getPool().query(query, [
    userData.userId,
    userData.name,
    userData.email,
    userData.password || null,
    userData?.signinMethod || false,
  ]);
  return rows[0];
};
