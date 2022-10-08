import { Router } from 'express';
import productsController from '../controllers/ProductsController';

const router = Router();

router.get('/products/:id', productsController.indexProducts);
router.get('/products', productsController.seachProducts);
router.post('/products', productsController.addProducts);
router.put('/products/:id', productsController.updateProducts);
router.delete('/products/:id', productsController.deletProducts);

export default router;
