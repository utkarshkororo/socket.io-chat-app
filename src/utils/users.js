const users = [];

exports.addUser = ({ id, username, room }) => {
  if (!username || !room) {
    return {
      error: 'Username and room are required!',
    };
  }
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });
  if (existingUser) {
    return {
      error: 'Username is in use!',
    };
  }
  const user = { id, username, room };
  users.push(user);
  return { user };
};

exports.removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

exports.getUser = (id) => {
  return users.find((user) => user.id === id);
};

exports.getUsersInRoom = (room) => {
  room = room.trim().toLowerCase();
  return users.filter((user) => user.room === room);
};
