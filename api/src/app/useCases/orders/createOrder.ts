import OrdersRepository from "../../repositories/OrdersRepository";
import { CreateOrderInterface } from "../../interfaces/CreateOrderInterface";
import { io } from "../../../http";

export async function createOrder({ table, products }: CreateOrderInterface) {
    const order = await OrdersRepository.create({ table, products });
    const orderDetails = await order.populate('product.products');
    io.emit('orders@new', orderDetails)
    return order;
}
