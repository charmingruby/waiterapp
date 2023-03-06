import { Router } from 'express';
import CreateCategoryController from '../../app/controllers/categories/CreateCategoryController';
import ListCategoriesController from '../../app/controllers/categories/ListCategoriesController';
import ListProductsByCategoryController from '../../app/controllers/categories/ListProductsByCategoryController';

export const CategoryRoutes = Router();

CategoryRoutes.get('/categories', ListCategoriesController.handle);
CategoryRoutes.post('/categories', CreateCategoryController.handle);
CategoryRoutes.get('/categories/:categoryId/products', ListProductsByCategoryController.handle);
