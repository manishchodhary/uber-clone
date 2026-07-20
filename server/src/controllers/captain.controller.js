import { validationResult } from "express-validator";
import Captain from "../models/captain.model.js";

export const register = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(400).json({ errors: error.array() });
  }
  try {
    const { email, fullname, password, vehicle } = req.body;
    const isCaptainExist = await Captain.findOne({ email });
    if (isCaptainExist) {
      return res.status(400).json({ message: "Captain already exists" });
    }
    const hasedPassword = await Captain.hashPassword(password);
    const newCaptain = await Captain.create({
      email,
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      password: hasedPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });
    const token = newCaptain.generateAuth();
    res.status(201).json({ token, captain: newCaptain });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(400).json({ errors: error.array() });
  }
  try {
    const { email, password } = req.body;
    const captain = await Captain.findOne({ email });
    if (!captain) {
      return res.status(400).json({ message: "captain not found" });
    }
    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = captain.generateAuth();
    res.status(200).json({ message: "Login successfull", token, captain });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const profile = async (req, res) => {
  try {
    const id = req.user._id;
    const captain = await Captain.findById(id).select("-password");
    if (!captain) {
      return res.status(404).json({
        message: "Captain not found",
      });
    }
    res.status(200).json({ captain });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("token");

  const token = req.cookies.token || req.headers.authorization.split(" ")[1];

  await BlacklistToken.create({ token });
  res.status(200).json({ message: "Logged out" });
};