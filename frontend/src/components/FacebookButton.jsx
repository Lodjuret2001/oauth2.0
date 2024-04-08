import { useState } from "react";
import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook } from "reactjs-social-login";
import User from "../utils/User";

const FacebookButton = ({ setFacebookUser }) => {
  const [user, setUser] = useState({});

  function handleResponse(r) {
    const facebookUser = new User(
      r.first_name,
      r.last_name,
      r.picture.data.url,
      r.email
    );

    setUser(facebookUser);
    setFacebookUser(facebookUser);
  }

  function handleSignOut() {
    setUser({});
    setFacebookUser(null);
  }

  return (
    <>
      {Object.keys(user) != 0 ? (
        <>
          <button className="mr-3 p-2 bg-white" onClick={() => handleSignOut()}>
            Sign Out from Facebook
          </button>
        </>
      ) : (
        <>
          <LoginSocialFacebook
            appId={`${import.meta.env.VITE_FACEBOOK_APP_ID}`}
            onResolve={(response) => {
              if (response) {
                handleResponse(response.data);
              } else {
                return;
              }
            }}
            onReject={(error) => {
              console.log(error);
            }}
          >
            <FacebookLoginButton />
          </LoginSocialFacebook>
        </>
      )}
    </>
  );
};

export default FacebookButton;
