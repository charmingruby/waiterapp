import { Router, Request, Response } from 'express';

export const OrderRouter = Router();

OrderRouter.get( '/orders', (req:Request, res:Response) => {
  return res.send('ok');
});

OrderRouter.post( '/orders', (req:Request, res:Response) => {
  return res.send('ok');
});

OrderRouter.patch( '/orders/:orderId ', (req:Request, res:Response) => {
  return res.send('ok');
});

OrderRouter.delete( '/orders/:orderId ', (req:Request, res:Response) => {
  return res.send('ok');
});
