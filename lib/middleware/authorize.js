module.exports = async (req, res, next) => {
  // TODO: Check req.user to ensure the user's email is 'admin'
  const { email } = req.user;
  if (email === 'admin') return next();

  const error = new Error('You do not have access to view this page');
  error.status = 403;
  next(error);
};
