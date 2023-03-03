import { Router, Request, Response } from 'express';

export const ProductRouter = Router();

ProductRouter.get( '/products', (req:Request, res:Response) => {
  return res.send('ok');
});

ProductRouter.post( '/products', (req:Request, res:Response) => {
  return res.send('ok');
});

