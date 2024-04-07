import { useEffect, useState } from "react";
import User from "../utils/User";
import { jwtDecode } from "jwt-decode";

const GoogleButton = ({ setGoogleUser }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [user, setUser] = useState({});

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
    document.getElementById("signInDivGoogle").hidden = true;
  }

  function handleSignOut() {
    setUser({});
    setGoogleUser(null);
    document.getElementById("signInDivGoogle").hidden = false;
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;

    script.onerror = () => {
      setScriptLoaded(false);
    };

    document.head.appendChild(script);
    setScriptLoaded(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleResponseCallback,
      });

      google.accounts.id.renderButton(
        document.getElementById("signInDivGoogle"),
        {
          theme: "filled_black",
        }
      );
    }, 50);
  }, []);

  return (
    <>
      {scriptLoaded ? (
        <>
          <div id="signInDivGoogle"></div>
          {Object.keys(user) != 0 && (
            <button onClick={() => handleSignOut()}>Sign Out</button>
          )}
        </>
      ) : (
        <div>Loading script...</div>
      )}
    </>
  );
};

export default GoogleButton;
