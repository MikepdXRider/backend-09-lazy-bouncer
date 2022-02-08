const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  /*
    TODO: Check for the session cookie and verify
    its contents using jsonwebtoken, then
    assign the payload to req.user
  */
  try {
    const cookie = req.cookies.session;
    const payload = jwt.verify(cookie, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    err.status = 401;
    err.message = 'You must be signed in to continue';
    next(err);
  }
};
