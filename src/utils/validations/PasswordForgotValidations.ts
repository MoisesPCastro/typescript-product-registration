import { Joi, Segments, celebrate } from 'celebrate';
import { IValidation } from '../iterfacesUltils';

class PasswordForgotValidation implements IValidation {
  bodyValidation() {
    return celebrate({
      [Segments.BODY]: {
        email: Joi.string().email().required()
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

export default new PasswordForgotValidation();
