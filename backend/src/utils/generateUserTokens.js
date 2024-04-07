import "dotenv/config";
import jwt from "jsonwebtoken";

function generateUserTokens(user) {
  const accsess_token = jwt.sign(user, process.env.ACCSESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
  const refresh_token = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "2h",
  });

  return { accsess_token, refresh_token };
}

export default generateUserTokens;
