import {CLIENT_ID, CLIENT_SECRET} from './IDSecret'
let accessToken = null;

// Function to request a new access token
export default function requestAccessToken() {
  fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  })
    .then((response) => response.json())
    .then((data) => {
      accessToken = data.access_token;
      const expiresIn = data.expires_in;

      // Set a timer to renew the access token when it expires
      setTimeout(requestAccessToken, (expiresIn - 60) * 1000); // Renew 1 minute before expiration
    })
    .catch((error) => {
      console.error("Error fetching access token:", error);
    });
}

// Initial request for an access token
requestAccessToken();

export {accessToken}