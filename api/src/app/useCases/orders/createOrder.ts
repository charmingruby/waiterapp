import OrdersRepository from "../../repositories/OrdersRepository";
import { CreateOrderInterface } from "../../interfaces/CreateOrderInterface";

export async function createOrder({ table, products }: CreateOrderInterface) {
    const order = await OrdersRepository.create({ table, products });
    return order;
}
