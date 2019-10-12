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
You don't need to client_secret file if you use .env file (which is needed for Netlify) - I need to create .env-sample file - people need to remove sample and add their stuff

Website theme
The CSS is done using Tailwind. In `gatsby-browser` file we ...
To change the accent color of the site go to `tailwind.config.js` and change the hexcode.



The website is deployed with Netlify and can be accessed here:
[here](https://here.com/)

To skip continuous deployment enter `[skip ci]` in commit message.

Tool to capture video thumbnail: https://boingboing.net/features/getthumbs