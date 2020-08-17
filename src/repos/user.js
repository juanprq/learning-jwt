const uuid = require('uuid');
const bcrypt = require('bcrypt');

const users = {};

module.exports.build = async (username, password) => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  return { username, hashedPassword };
};

module.exports.create = (user) => {
  const id = uuid.v4();
  users[id] = user;

  return { id, ...user };
}
