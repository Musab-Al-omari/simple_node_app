const { celebrate, Joi, Segments } = require("celebrate");

module.exports = celebrate({
  [Segments.BODY]: Joi.object().keys({
    success: Joi.string().required().trim(),
    low_point: Joi.string().required().trim(),
    take_away: Joi.string().required().trim(),
    owner_id: Joi.string().required().trim(),
  }),
});
