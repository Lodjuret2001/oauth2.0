import { useState } from "react";
import User from "../utils/User";
import GoogleButton from "./GoogleButton";
import LinkedInButton from "./LinkedInButton";
import FacebookButton from "./FacebookButton";

const SignInGrid = () => {
  const [googleUser, setGoogleUser] = useState<User>();
  const [linkedInUser, setLinkedInUser] = useState<User>();
  const [facebookUser, setFacebookUser] = useState<User>();

  const handleGoogleUser = (user: User) => {
    setGoogleUser(user);
  };
  const handleLinkedInUser = (user: User) => {
    setLinkedInUser(user);
  };
  const handleFacebookUser = (user: User) => {
    setFacebookUser(user);
  };

  return (
    <div className="w-full flex justify-center">
      <div
        className="bg-purple-500 w-4/5 flex justify-between mt-6"
        style={{ height: "250px" }}
      >
        <div id="signInDiv" className="bg-yellow flex justify-evenly flex-col">
          {googleUser && (
            <div>
              <h2 className="font-bold">Google User Information</h2>
              <p>First Name: {googleUser.firstName}</p>
              <p>Last Name: {googleUser.lastName}</p>
              <p>Email: {googleUser.email}</p>
              <img src={googleUser.picture} alt="Profile" />
            </div>
          )}
          <GoogleButton setGoogleUser={handleGoogleUser} />
        </div>
        <div id="signInDivLinkedIn" className="bg-blue flex justify-evenly flex-col">
          {linkedInUser && (
            <div>
              <h2 className="font-bold">LinkedIn User Information</h2>
              <p>First Name: {linkedInUser.firstName}</p>
              <p>Last Name: {linkedInUser.lastName}</p>
              <p>Email: {linkedInUser.email}</p>
              <img src={linkedInUser.picture} alt="Profile" />
            </div>
          )}

          <LinkedInButton setLinkedInUser={handleLinkedInUser} />
        </div>
        <div id="signInDivFacebook" className="bg-pink flex justify-evenly flex-col">
          {facebookUser && (
            <div>
              <h2 className="font-bold">Facebook User Information</h2>
              <p>First Name: {facebookUser.firstName}</p>
              <p>Last Name: {facebookUser.lastName}</p>
              <p>Email: {facebookUser.email}</p>
              <img src={facebookUser.picture} alt="Profile" />
            </div>
          )}
          <FacebookButton setFacebookUser={handleFacebookUser} />
        </div>
      </div>
    </div>
  );
};

export default SignInGrid;
