// third-party library
const Joi = require("joi").extend(require("@joi/date"));

/**
 * @desc Schema to validate reservation Id
 */
const idSchema = Joi.number().integer().positive().required();

/**
 * @desc Schema to validate checkout date
 */
const dateSchema = Joi.date().format("YYYY-MM-DD");

module.exports = { idSchema, dateSchema };
