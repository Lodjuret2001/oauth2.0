import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {
  getLinkedInAccessToken,
  getLinkedInUser,
} from "./utils/linkedInFunctions.js";
import generateUserTokens from "./utils/generateUserTokens.js";

const app = express();
app.use(express.json(), cors(), cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/auth/linkedin/callback", async (req, res) => {
  try {
    const auth_code = req.query.code;

    const linkedin_access_token = await getLinkedInAccessToken(auth_code);
    const user = await getLinkedInUser(linkedin_access_token);
    const { accsess_token, refresh_token } = generateUserTokens(user);

    res.cookie("accsess_token", accsess_token);
    res.cookie("refresh_token", refresh_token);
    res.redirect(`http://localhost:5173`);
  } catch (error) {
    console.error(
      "Error exchanging authorization code for access token:",
      error
    );
    res.status(500).send("Internal Server Error");
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie("accsess_token");
  res.clearCookie("refresh_token");
  res.send("Cookies cleared successfully");
});

app.listen(3000, console.log("Listening on PORT 3000..."));
