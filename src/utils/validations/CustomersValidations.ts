import { Joi, Segments, celebrate } from 'celebrate';
import { IValidation } from '../iterfacesUltils';

class UserValidations implements IValidation {
  bodyValidation() {
    return celebrate({
      [Segments.BODY]: {
        name: Joi.string().required(),
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

export default new UserValidations();
