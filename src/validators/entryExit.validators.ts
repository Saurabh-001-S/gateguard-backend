import { body } from "express-validator";

// Shared location rules reused by both entry and exit
export const locationRules = [
  body("latitude")
    .isFloat({ min: -90, max: 90 })
    .withMessage("Latitude must be a number between -90 and 90")
    .toFloat(),

  body("longitude")
    .isFloat({ min: -180, max: 180 })
    .withMessage("Longitude must be a number between -180 and 180")
    .toFloat(),
];

export const exitRules = locationRules;
export const entryRules = locationRules;
