import { Order } from "../models/Order";

import { CreateOrderInterface } from "../interfaces/CreateOrderInterface";
import { EditOrderInterface } from "../interfaces/EditOrderInterface";
import { CancelOrderInterface } from "../interfaces/CancelOrderInterface";

class OrdersRepository {
  async findAll() {
    const orders = await Order.find().populate('products.product').sort({ createdAt: 1 });
    return orders;
  }
  async create({ table, products }:CreateOrderInterface) {
      const order = Order.create({ table, products })
      return order;
  }
  async update({ orderId, status }:EditOrderInterface) {
    await Order.findByIdAndUpdate(orderId, { status });
    return;
  }
  async delete({ orderId }:CancelOrderInterface) {
    await Order.findByIdAndDelete(orderId);
    return;
  }
}

export default new OrdersRepository();
