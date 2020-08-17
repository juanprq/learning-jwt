const usersRepo = require('../repos/user');

module.exports.signupGet = (req, res) => {
  res.render('auth/signup');
};

module.exports.signupPost = async (req, res) => {
  const { email, password } = req.body;

  const userData = await usersRepo.build(email, password);
  const user = await usersRepo.create(userData);
  res
    .status(201)
    .send(user);
};

module.exports.loginGet = (req, res) => {
  res.render('auth/login');
};

module.exports.loginPost = (req, res) => {
  const { email, password } = req.body;
  res.send('user login');
};
