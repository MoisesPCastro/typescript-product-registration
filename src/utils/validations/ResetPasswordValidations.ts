import { Joi, Segments, celebrate } from 'celebrate';
import { IValidation } from '../iterfacesUltils';

class ResetPasswordValidation implements IValidation {
  bodyValidation() {
    return celebrate({
      [Segments.BODY]: {
        token: Joi.string().uuid().required(),
        password: Joi.string().required(),
        confirmPassword: Joi.string().required().valid(Joi.ref('password'))
      }
    });
  }

  paramsValidation() {
    return celebrate({
      [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
      }
    });
  }
}

export default new ResetPasswordValidation();
