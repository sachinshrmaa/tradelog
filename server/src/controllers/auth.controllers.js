import bycrypt from "bcryptjs";
import { nanoid } from "nanoid";
import { createUser, getUserByEmail } from "../repository/auth.repository.js";

export const googleSignUpCallback = async (req, res) => {
  res.json({ message: "Google Authenticated" });
};

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const userData = {
    userId: nanoid(),
    name,
    email,
    password: bycrypt.hashSync(password, 10),
  };
  try {
    if (await getUserByEmail(email))
      return res.status(400).json({ status: 400, message: "User already exists" });

    const user = await createUser(userData);
    user.password = null;
    res.status(201).json({ status: 201, message: "User registered sucessfully", user });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  let user;
  try {
    user = await getUserByEmail(email);
  } catch (error) {
    console.log("Failed to fetch user:", error);
    return res.status(500).json({ message: error.message });
  }

  if (user === null) {
    return res.status(400).json({ message: "User does not exists" });
  }

  if (user.is_active === false) {
    return res.status(400).json({ message: "User is not active" });
  }

  if (!bycrypt.compareSync(password, user.password)) {
    return res.status(400).json({ message: "Invalid credentials" });
  } else {
    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ error: "Login failed" });
      }
      res.status(200).json({ message: "Login successful" });
    });
  }
};

export const signOut = async (req, res) => {
  req.logout(() => {
    res.json({ message: "Logged out" });
  });
};
