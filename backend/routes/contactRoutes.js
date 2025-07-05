const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const CLIENT_ID = process.env.EMAIL_CLIENT_ID;
const CLIENT_SECRET = process.env.EMAIL_CLIENT_SECRET;
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = process.env.EMAIL_REFRESH_TOKEN;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_TO_USER = process.env.EMAIL_TO_USER || EMAIL_USER;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ msg: "Please fill in all fields" });
  }

  try {
    // getAccessToken() may return either { token: … } or just a string
    const accessTokenResponse = await oAuth2Client.getAccessToken();
    const accessToken =
      typeof accessTokenResponse === "string"
        ? accessTokenResponse
        : accessTokenResponse.token;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: EMAIL_USER,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: EMAIL_TO_USER,
      subject: "New Contact Form Submission",
      text: `
You have a new contact form submission:

Name: ${name}
Email: ${email}
Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ msg: "✅ Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ msg: "❌ Failed to send email", error: error.message });
  }
});

module.exports = router;
