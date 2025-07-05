const dotenv = require("dotenv");
dotenv.config();
const { google } = require("googleapis");
const readline = require("readline");

const SCOPES = ["https://www.googleapis.com/auth/gmail.send"];

const oAuth2Client = new google.auth.OAuth2(
  process.env.EMAIL_CLIENT_ID,
  process.env.EMAIL_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground" // 也可以改成 "urn:ietf:wg:oauth:2.0:oob" 或者 localhost
);

// 生成授权 URL
const authUrl = oAuth2Client.generateAuthUrl({
  access_type: "offline", // 必须要 offline 才能拿到 refresh_token
  scope: SCOPES,
});

console.log("Authorize this app by visiting this url:\n", authUrl);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the code from that page here: ", async (code) => {
  rl.close();
  try {
    const { tokens } = await oAuth2Client.getToken(code);
    console.log("\n✅ Access Token:", tokens.access_token);
    console.log("🔁 Refresh Token:", tokens.refresh_token);
    console.log("🕒 Token Expiry:", tokens.expiry_date);
  } catch (err) {
    console.error("❌ Error retrieving access token", err);
  }
});
