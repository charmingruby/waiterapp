import { Router } from 'express';

import multer from "multer";
import uploadConfig from '../../app/configs/uploadConfig';

import CreateProductController from '../../app/controllers/products/CreateProductController';
import ListProductsController from '../../app/controllers/products/ListProductsController';

export const ProductRoutes = Router();

const upload = multer(uploadConfig.upload('uploads'));

ProductRoutes.get('/products', ListProductsController.handle);
ProductRoutes.post('/products', upload.single('image'), CreateProductController.handle);
