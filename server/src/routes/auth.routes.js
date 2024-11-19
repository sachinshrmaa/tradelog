import { Router } from "express";
import passport from "../utils/passport.js";
import { googleSignUpCallback, signIn, signOut, signUp } from "../controllers/auth.controllers.js";

const router = Router();

// Google Authentication Route
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Google Callback Route TODO: add a better failure redirect
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  googleSignUpCallback
);

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/logout", signOut);

export default router;
