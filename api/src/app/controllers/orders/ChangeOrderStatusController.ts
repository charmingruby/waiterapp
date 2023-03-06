import { Request, Response } from "express";
import { changeOrderStatus } from "../../useCases/orders/changeOrderStatus";

class ChangeOrderStatusController {
  async handle(req:Request, res:Response) {
    try {
      const { orderId } = req.params;
      const { status } = req.body;

      const validStatus = ["WAITING", "IN PRODUCTION", "DONE"].includes(status);

      if(!validStatus) {
        return res.status(400).json({error: "Invalid Status"});
      }

      await changeOrderStatus({ orderId, status });
      return res.sendStatus(204);
    } catch(error) {
      console.log(error);
      return res.sendStatus(500);
    }
  }
}

export default new ChangeOrderStatusController();
