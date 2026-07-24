import User from "../src/models/user.model";

const createUser = async ({firstname, lastname, email, password}) => {
  if (!firstname || !email || !password) {
    throw new Error("All fields are required");
  }
  const user = await User.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });

  return user;
};

export default createUser;
