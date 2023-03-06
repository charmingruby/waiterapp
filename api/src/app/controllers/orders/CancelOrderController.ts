import { Request, Response } from "express";
import { cancelOrder } from "../../useCases/orders/cancelOrder";

class CancelOrderController {
  async handle(req:Request, res:Response) {
    try {
      const { orderId } = req.params;
      await cancelOrder({ orderId });
      return res.sendStatus(204);
    } catch(error) {
      console.log(error);
      return res.sendStatus(500)
    }
  }
}

export default new CancelOrderController();
