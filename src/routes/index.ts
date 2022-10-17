import { Router } from 'express';
import productsController from '../controllers/ProductsController';
import usersController from '../controllers/UsersController';
import sessionsUsersController from '../controllers/SessionsUserController';
import productsValidations from '../utils/validations/ProductsValidations';
import usersValidations from '../utils/validations/UserValidations';
import sessionsUserValidations from '../utils/validations/SessionUserValidations';

const router = Router();

//Users
router.get('/user/:id', usersController.indexUser);
router.get('/user', usersController.seachUser);
router.delete('/user/:id', usersController.deletUser);
router.post(
  '/user',
  usersValidations.bodyValidation(),
  usersController.addUser
);
router.put(
  '/user/:id',
  usersValidations.bodyValidation(),
  usersController.updateUser
);

//jwt
router.post(
  '/user_token',
  sessionsUserValidations.bodyValidation(),
  sessionsUsersController.getToken
);

//Products
router.get('/products/:id', productsController.indexProducts);
router.get('/products', productsController.seachProducts);
router.delete('/products/:id', productsController.deletProducts);
router.post(
  '/products',
  productsValidations.bodyValidation(),
  productsController.addProducts
);
router.put(
  '/products/:id',
  productsValidations.bodyValidation(),
  productsController.updateProducts
);

export default router;
