module.exports.signupGet = (req, res) => {
  res.render('auth/signup');
};

module.exports.signupPost = (req, res) => {
  res.send('user signup');
};

module.exports.loginGet = (req, res) => {
  res.render('auth/login');
};

module.exports.loginPost = (req, res) => {
  res.send('user login');
};
