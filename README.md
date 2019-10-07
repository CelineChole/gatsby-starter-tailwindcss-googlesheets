## 🧘 Website

create file client_secret.json
Go to the Google API console
Create a new project by clicking on My Project
Click enable API, search for and enable the Google Drive API.
Click on Credentials and create credentials, then help me choose
Select Web server and click Application data
Name the service and grant it a Project role of Editor
Download the JSON file
Open the file in VS code in your Gatsby project and rename to client_secret.json


{
  "type": "service_account",
  "project_id": "gatsby-template",
  "private_key_id": "to do",
  "private_key": "to do",
  "client_email": "to do",
  "client_id": "to do",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/yoga-library%40yoga-library.iam.gserviceaccount.com"
}

The website is deployed with Netlify and can be accessed here:
[here](https://here.com/)

To skip continuous deployment enter `[skip ci]` in commit message.

Tool to capture video thumbnail: https://boingboing.net/features/getthumbs