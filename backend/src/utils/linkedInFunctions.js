import "dotenv/config";
import axios from "axios";
import querystring from "querystring";

async function getLinkedInAccessToken(auth_code) {
  const reqBody = querystring.stringify({
    grant_type: "authorization_code",
    code: auth_code,
    client_id: process.env.LINKEDIN_CLIENT_ID,
    client_secret: process.env.LINKEDIN_CLIENT_SECRET,
    redirect_uri: process.env.LINKEDIN_REDIRECT_URI,
  });

  const accsess_token_response = await axios.post(
    "https://www.linkedin.com/oauth/v2/accessToken",
    reqBody,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  return accsess_token_response.data.access_token;
}

async function getLinkedInUser(access_token) {
  const user_response = await axios.get(
    "https://api.linkedin.com/v2/userinfo",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  return user_response.data;
}

export { getLinkedInAccessToken, getLinkedInUser };
