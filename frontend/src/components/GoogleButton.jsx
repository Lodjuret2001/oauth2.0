import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const GoogleButton = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
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
      function handleResponseCallback(response) {
        console.log("This is the encoded JWT ID TOKEN: " + response.credential);
        const userObject = jwtDecode(response.credential);
        console.log(userObject);
      }

      google.accounts.id.initialize({
        client_id:
          "418927252212-ehnq9ro7b5v4hfcg3gigkof7alushl4u.apps.googleusercontent.com",
        callback: handleResponseCallback,
      });

      google.accounts.id.renderButton(document.getElementById("signInDiv"), {
        theme: "filled_black",
      });
    }, 10);
  }, [scriptLoaded]);

  return (
    <>
      {scriptLoaded ? <div id="signInDiv"></div> : <div>Loading script...</div>}
    </>
  );
};

export default GoogleButton;
