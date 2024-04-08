import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import User from "../utils/User";
import findTokenInCookie from "../utils/findTokenInCookie.js";
import buttonImage from "../assets/linkedInButton.png";

const LinkedInButton = ({ setLinkedInUser }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const accsess_token = findTokenInCookie("accsess_token");
    const refresh_token = findTokenInCookie("refresh_token");

    if (!accsess_token && !refresh_token) return;
    const user = jwtDecode(accsess_token);
    if (user) {
      const linkedInUser = new User(
        user.given_name,
        user.family_name,
        user.picture,
        user.email
      );
      setUser(linkedInUser);
      setLinkedInUser(linkedInUser);
    }
  }, []);

  const handleSignIn = () => {
    const client_id = import.meta.env.VITE_LINKEDIN_CLIENT_ID;
    const redirect_uri = import.meta.env.VITE_LINKEDIN_REDIRECT_URI;

    const AUTH_URL = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=profile%20email%20openid`;

    window.location.href = AUTH_URL;
  };

  const handleSignOut = async () => {
    setLinkedInUser(null);
    setUser({});
    await axios.delete("http://localhost:3000/logout");
  };

  return (
    <div className="signInDivLinkedIn">
      {Object.keys(user) != 0 ? (
        <>
          <button
            onClick={() => handleSignOut()}
            className="p-1 bg-white w-full"
          >
            Sign out from LinkedIn
          </button>
        </>
      ) : (
        <>
          <button
            style={{
              backgroundImage: `url(${buttonImage})`,
              backgroundSize: "cover",
              width: "200px",
              height: "40px",
              marginTop: "10px",
            }}
            onClick={() => handleSignIn()}
          ></button>
        </>
      )}
    </div>
  );
};

export default LinkedInButton;
