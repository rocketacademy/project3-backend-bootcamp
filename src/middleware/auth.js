const {auth} = require('express-oauth2-jwt-bearer');

module.exports = auth({
  audience: "http://localhost:3000",
  issuerBaseURL: "https://dev-crafqg1op5ery45z.us.auth0.com",
});

