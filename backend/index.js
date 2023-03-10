const express = require("express");
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')

const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client('840453072228-igr9q360p2miisosqd0a09k9at7nono9.apps.googleusercontent.com');

app.use(bodyParser.json())
app.use(cors())

app.post("/api/google-login", async(req, res) => {

    const data = await client.verifyIdToken({
        idToken: req.body.token,
    });

    res.status(200).json(data.getPayload())
});

app.listen(4001, () => {
    console.log(`Server is ready at http://localhost:${4001}`);
});

module.exports = app;