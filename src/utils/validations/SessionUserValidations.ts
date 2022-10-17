import { Joi, Segments, celebrate } from 'celebrate';
import { IValidation } from '../iterfacesUltils';

class SessionsUserValidations implements IValidation {
  bodyValidation() {
    return celebrate({
      [Segments.BODY]: {
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
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

export default new SessionsUserValidations();
