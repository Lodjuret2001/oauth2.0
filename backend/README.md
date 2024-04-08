# OAuth 2.0 Authentication Server

This backend server provides OAuth 2.0 authentication endpoints for integrating with various social login providers like Google, LinkedIn, and Facebook.

## Setup

1. Create a `.env` file in the root directory of the server.

2. Add the following environment variables to the `.env` file:

```dotenv
ACCSESS_TOKEN_SECRET = "your_access_token_secret_here"
REFRESH_TOKEN_SECRET = "your_refresh_token_secret_here"
GOOGLE_CLIENT_ID = "your_google_client_id_here"
GOOGLE_CLIENT_SECRET = "your_google_client_secret_here"
LINKEDIN_CLIENT_ID = "your_linkedin_client_id_here"
LINKEDIN_CLIENT_SECRET = "your_linkedin_client_secret_here"
LINKEDIN_REDIRECT_URI = "your_linkedin_redirect_uri_here"
FACEBOOK_APP_ID = "your_facebook_app_id_here"
FACEBOOK_APP_SECRET = "your_facebook_app_secret_here"
```

Replace `"your_access_token_secret_here"` with your actual credentials provided by the respective services.

## Key Features

- **Express.js Server**: The backend server is built using Express.js, a fast, unopinionated, minimalist web framework for Node.js.

- **OAuth 2.0 Authentication**: Provides authentication endpoints for Google, LinkedIn, and Facebook OAuth 2.0 flows.

- **Cookie-based Authentication**: Utilizes HTTP cookies for storing access tokens and refreshing tokens securely.