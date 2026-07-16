import { validationResult } from "express-validator";
import User from "../models/user.model.js";
import BlacklistToken from "../models/blackListToken.model.js";
import createUser from "../../services/user.service.js";

export const register = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  try {
    const { fullname, email, password } = req.body;

    const isUserAlready = await User.findOne({ email });
    if (isUserAlready) {
      return res.status(400).json({ message: "User already exist" });
    }

    const hashPassword = await User.hashPassword(password);

    const user = await createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email: email,
      password: hashPassword,
    });

    const token = await user.generateAuthToken();

    res.status(201).json({ token, user });
  } catch (error) {
    console.log("error register controller", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const verify = await user.comparePassword(password);
    if (!verify) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = await user.generateAuthToken();
    res.status(200).json({ token, user });
  } catch (error) {
    console.log("error login controller", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const profile = async (req, res) => {
  res.status(200).json({ user: req.user });
};

export const logout = async (req, res) => {
  res.clearCookie("token");

  const token = req.cookies.token || req.headers.authorization.split(" ")[1];

  await BlacklistToken.create({ token });
  res.status(200).json({ message: "Logged out" });
};
