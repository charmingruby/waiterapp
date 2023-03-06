import OrdersRepository from "../../repositories/OrdersRepository";

export async function listOrders() {
  const orders = await OrdersRepository.findAll();
  return orders;
}
