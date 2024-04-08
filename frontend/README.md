# OAuth 2.0 Frontend APP

This React APP enables seamless integration of OAuth 2.0 authentication into your web application. Users can sign in with their social media accounts and grant access to their profile information.

## How to Use

### Installation

1. Ensure you have the necessary dependencies installed in your project. You can install them using npm

2. Ensure you have setup Client apps in Google, LinkedIn and Facebook.

3. Ensure you have the necessary environment variables configured in your project. Create a `.env` file in the root of your frontend project and add the following variables:

```dotenv
VITE_ACCSESS_TOKEN_SECRET = "your_access_token_secret_here"
VITE_REFRESH_TOKEN_SECRET = "your_refresh_token_secret_here"
VITE_GOOGLE_CLIENT_ID = "your_google_client_id_here"
VITE_GOOGLE_CLIENT_SECRET = "your_google_client_secret_here"
VITE_LINKEDIN_CLIENT_ID = "your_linkedin_client_id_here"
VITE_LINKEDIN_CLIENT_SECRET = "your_linkedin_client_secret_here"
VITE_LINKEDIN_REDIRECT_URI = "your_linkedin_redirect_uri_here"
VITE_FACEBOOK_APP_ID = "your_facebook_app_id_here"
VITE_FACEBOOK_APP_SECRET = "your_facebook_app_secret_here"
```

Replace `your_access_token_secret_here` and all others with your actual values.

### Functionality

- When the user clicks on any sign-in button, they will be redirected to the Client authorization page.

- After the user grants access, they will be redirected back to your application's specified redirect URI.

- Upon successful authentication, the component will retrieve the user's profile information and set it in the state.

- If the user is already authenticated, their information will be displayed, and a "Sign out" button will be provided to log out.

## BUGS & PR

- Feel free to send PR or reach out to me if you have any questions regardning this project.
