import { Router } from 'express';
import multer from 'multer';
import productsController from '../controllers/ProductsController';
import usersController from '../controllers/UsersController';
import sessionsUsersController from '../controllers/SessionsUserController';
import productsValidations from '../utils/validations/ProductsValidations';
import usersValidations from '../utils/validations/UserValidations';
import sessionsUserValidations from '../utils/validations/SessionUserValidations';
import isAuthenticated from '../middlewares/authenticated';
import uploadConfig from '../config/upload';
import usersAvatarController from '../controllers/UsersAvatarController';
import forgotPasswordController from '../controllers/ForgotPasswordController';
import resetPasswordController from '../controllers/ResetPsswordController';
import passwordForgotValidations from '../utils/validations/PasswordForgotValidations';
import resetPasswordValidations from '../utils/validations/ResetPasswordValidations';

const router = Router();
const uploadMulter = multer(uploadConfig);

//jwt
router.post(
  '/user_token',
  sessionsUserValidations.bodyValidation(),
  sessionsUsersController.getToken
);
router.post(
  '/user',
  usersValidations.bodyValidation(),
  usersController.addUser
);

//Password

router.post(
  '/password/forgot',
  passwordForgotValidations.bodyValidation(),
  forgotPasswordController.create
);

router.post(
  '/password/reset',
  resetPasswordValidations.bodyValidation(),
  resetPasswordController.create
);

router.use(isAuthenticated);

//Users
router.get('/user/:id', usersController.indexUser);
router.get('/user', usersController.seachUser);
router.delete('/user/:id', usersController.deletUser);

router.put(
  '/user/:id',
  usersValidations.bodyValidation(),
  usersController.updateUser
);

router.patch(
  '/user-avatar',
  uploadMulter.single('avatar'),
  usersAvatarController.update
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
