import { Router, Request, Response } from 'express';

export const CategoryRouter = Router();

CategoryRouter.get( '/categories', (req:Request, res:Response) => {
  return res.send('ok');
});

CategoryRouter.post( '/categories', (req:Request, res:Response) => {
  return res.send('ok');
});

CategoryRouter.get('/categories/:categoryId/products', (req:Request, res:Response) => {
  return res.send('ok');
});
