import { useEffect, useState } from "react";
import User from "../utils/User";
import { jwtDecode } from "jwt-decode";

const GoogleButton = ({ setGoogleUser }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleResponseCallback,
    });

    google.accounts.id.renderButton(
      document.getElementById("google-login-box"),
      {
        theme: "filled_black",
      }
    );
  }, []);

  function handleResponseCallback(response) {
    const userObject = jwtDecode(response.credential);

    const googleUser = new User(
      userObject.given_name,
      userObject.family_name,
      userObject.picture,
      userObject.email
    );

    setUser(googleUser);
    setGoogleUser(googleUser);
    document.getElementById("google-login-box").hidden = true;
  }

  function handleSignOut() {
    setUser({});
    setGoogleUser(null);
    document.getElementById("google-login-box").hidden = false;
  }

  return (
    <>
      <div id="google-login-container">
        {Object.keys(user) != 0 ? (
          <>
            <button onClick={() => handleSignOut()} className="bg-white p-1">
              Sign out from Google
            </button>
          </>
        ) : (
          <></>
        )}
        <div id="google-login-box"></div>
      </div>
    </>
  );
};

export default GoogleButton;
