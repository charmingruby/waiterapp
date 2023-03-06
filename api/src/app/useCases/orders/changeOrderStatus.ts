import OrdersRepository from "../../repositories/OrdersRepository"
import { EditOrderInterface } from "../../interfaces/EditOrderInterface";

export async function changeOrderStatus({ orderId, status }:EditOrderInterface) {
  const order = await OrdersRepository.update({ orderId, status });
  return order;
}
