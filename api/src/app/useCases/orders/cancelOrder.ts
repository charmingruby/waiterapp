import OrdersRepository from "../../repositories/OrdersRepository";
import { CancelOrderInterface } from "../../interfaces/CancelOrderInterface";

export async function cancelOrder({ orderId }:CancelOrderInterface) {
  await OrdersRepository.delete({ orderId });
  return;
}
