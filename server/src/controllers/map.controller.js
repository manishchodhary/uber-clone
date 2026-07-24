import { validationResult } from "express-validator";
import { getAddressCoordinate, getDistanceTime } from "../services/map.service";

export const getCoordinate = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { address } = req.query;
  try {
    const coordinates = await getAddressCoordinate(address);
    res.status(200).json(coordinates);
  } catch (error) {
    res.status(404).json({ message: "Coordinates not found" });
  }
};

export const getDistanceTime = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { origin, destination } = req.query;
    const distanceTime = await getDistanceTime(origin, destination);
    return res.status(200).json(distanceTime);
  } catch (error) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAutoCompleteSuggestions = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { input } = req.query;
    const suggestions = await mapService.getAutoCompleteSuggestions(input);

    res.status(200).json(suggestions);
  } catch (error) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
