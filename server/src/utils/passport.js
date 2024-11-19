import dotenv from "dotenv";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { createUser, getUserByEmail } from "../repository/auth.repository.js";

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        const user = await getUserByEmail(profile?.emails[0]?.value);
        if (user) {
          return done(null, user);
        } else {
          const userData = {
            userId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            signinMethod: true,
          };

          // Create New User
          const newUser = await createUser(userData);
          return done(null, newUser);
        }
      } catch (error) {
        console.error("Error in Google Strategy callback:", error);
        return done(error);
      }
    }
  )
);

// Serialize and Deserialize User
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

export default passport;
