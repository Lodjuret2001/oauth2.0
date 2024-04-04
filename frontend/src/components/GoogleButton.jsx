import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const GoogleButton = ({ setGoogleUser }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [user, setUser] = useState({});
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

  function handleResponseCallback(response) {
    console.log("This is the encoded JWT ID TOKEN: " + response.credential);
    const userObject = jwtDecode(response.credential);
    const googleUser = {
      firstName: userObject.given_name,
      lastName: userObject.family_name,
      picture: userObject.picture,
    };

    console.log(googleUser);
    setUser(googleUser);
    setGoogleUser(googleUser);
    document.getElementById("signInDivGoogle").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    setGoogleUser(null);
    document.getElementById("signInDivGoogle").hidden = false;
  }

  useEffect(() => {
    setTimeout(() => {
      google.accounts.id.initialize({
        client_id:
          "418927252212-ehnq9ro7b5v4hfcg3gigkof7alushl4u.apps.googleusercontent.com",
        callback: handleResponseCallback,
      });

      google.accounts.id.renderButton(
        document.getElementById("signInDivGoogle"),
        {
          theme: "filled_black",
        }
      );
    }, 20);
  }, []);

  return (
    <>
      {scriptLoaded ? (
        <>
          <div id="signInDivGoogle"></div>
          {Object.keys(user) != 0 && (
            <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
          )}
        </>
      ) : (
        <div>Loading script...</div>
      )}
    </>
  );
};

export default GoogleButton;
