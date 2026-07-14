import { body } from "express-validator";
import { Router } from "express";
import { authUser } from "../middleware/auth.js";
import { login, register, profile, logout } from "../controllers/user.controller.js";

const router = Router();

router.post(
    "/register",
    [
        body("email").isEmail().withMessage("Invalid email"),
        body("fullname.firstname")
            .isLength({ min: 3 })
            .withMessage("First name must be at least 3 characters long"),
        body("password")
            .isLength({ min: 6 })
            .withMessage("Password must be at least 6 characters long"),
    ],
    register,
);

router.post("/login", [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
        .isLength(6)
        .withMessage("Password must be at least 6 characters long"),
], login);

router.get("/profile", authUser, profile)
router.get('/logout', authUser, logout)

export default router