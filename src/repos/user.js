const uuid = require('uuid');

const users = {};

module.exports.create = (user) => {
  const id = uuid.v4();
  users[id] = user;

  return { id, ...user };
}
