import { Request, Response } from "express";
import { listOrders } from "../../useCases/orders/listOrders";

class ListOrdersController {
  async handle(req:Request, res:Response) {
    try {
      const orders = await listOrders();
      return res.json(orders);
    } catch(error) {
      console.log(error);
      return res.sendStatus(500);
    }
  }
}
export default new ListOrdersController();
