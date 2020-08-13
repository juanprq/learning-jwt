module.exports.signupGet = (req, res) => {
  res.render('auth/signup');
};

module.exports.signupPost = (req, res) => {
  const { email, password } = req.body;
  res.send('user signup');
};

module.exports.loginGet = (req, res) => {
  res.render('auth/login');
};

module.exports.loginPost = (req, res) => {
  const { email, password } = req.body;
  res.send('user login');
};
