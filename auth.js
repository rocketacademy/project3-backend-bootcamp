const { auth } = require("express-oauth2-jwt-bearer");

const checkJwt = auth({
  audience: "https://launchpad/api",
  issuerBaseURL: "https://dev-l8x5jjx2.us.auth0.com/",
});

module.exports = checkJwt;
