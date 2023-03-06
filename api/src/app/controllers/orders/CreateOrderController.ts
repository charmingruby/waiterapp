import { Request, Response } from "express";
import { createOrder } from "../../useCases/orders/createOrder";

class CreateOrderController {
  async handle(req:Request, res:Response) {
    try {
      const { table, products } = req.body;
      const order = await createOrder({ table, products });
      return res.json(order);
    } catch(error) {
      console.log(error);
      return res.sendStatus(500);
    }
  }
}

export default new CreateOrderController();
