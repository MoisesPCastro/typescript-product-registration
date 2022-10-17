import { Joi, Segments, celebrate } from 'celebrate';
import { IValidation } from '../iterfacesUltils';

class ProductsValidations implements IValidation {
  bodyValidation() {
    return celebrate({
      [Segments.BODY]: {
        name: Joi.string().required(),
        price: Joi.number().precision(2).required(),
        quantity: Joi.number().required()
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

export default new ProductsValidations();
