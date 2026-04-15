import { body } from "express-validator";

const GENDERS = ["MALE", "FEMALE", "OTHER"] as const;

export const registerStudentRules = [
  body("email")
    .isEmail().withMessage("Must be a valid email")
    .normalizeEmail(),

  body("password")
    .isLength({ min: 8 }).withMessage("Password must be at least 8 characters")
    .matches(/[A-Z]/).withMessage("Password must contain an uppercase letter")
    .matches(/[0-9]/).withMessage("Password must contain a number")
    .matches(/[!@#$%^&*]/).withMessage("Password must contain a special character (!@#$%^&*)"),

  body("name")
    .trim()
    .isLength({ min: 2, max: 100 }).withMessage("Name must be 2–100 characters"),

  body("mobileNo")
    .matches(/^\d{10}$/).withMessage("Mobile number must be exactly 10 digits"),

  body("roomNo")
    .trim()
    .isLength({ min: 1, max: 20 }).withMessage("Room number required (max 20 chars)"),

  body("gender")
    .isIn(GENDERS).withMessage(`Gender must be one of: ${GENDERS.join(", ")}`),

  body("departmentId")
    .isInt({ min: 1 }).withMessage("Valid department ID required")
    .toInt(),
];

export const loginStudentRules = [
  body("email")
    .isEmail().withMessage("Must be a valid email")
    .normalizeEmail(),

  body("password")
    .notEmpty().withMessage("Password is required"),

  body("deviceId")
    .trim()
    .isLength({ min: 8, max: 100 }).withMessage("Device ID must be 8–100 characters"),

  body("deviceName")
    .trim()
    .isLength({ min: 1, max: 100 }).withMessage("Device name required"),

  body("latitude")
    .isFloat({ min: -90, max: 90 }).withMessage("Latitude must be between -90 and 90")
    .toFloat(),

  body("longitude")
    .isFloat({ min: -180, max: 180 }).withMessage("Longitude must be between -180 and 180")
    .toFloat(),
];

export const loginAdminRules = [
  body("email")
    .isEmail().withMessage("Must be a valid email")
    .normalizeEmail(),

  body("password")
    .notEmpty().withMessage("Password is required"),
];
