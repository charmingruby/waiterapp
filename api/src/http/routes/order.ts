import { Router } from 'express';

import ListOrdersController from '../../app/controllers/orders/ListOrdersController';
import CreateOrderController from '../../app/controllers/orders/CreateOrderController';
import ChangeOrderStatusController from '../../app/controllers/orders/ChangeOrderStatusController';
import CancelOrderController from '../../app/controllers/orders/CancelOrderController';

export const OrderRoutes = Router();

OrderRoutes.get('/orders', ListOrdersController.handle);
OrderRoutes.post('/orders', CreateOrderController.handle);
OrderRoutes.patch('/orders/:orderId', ChangeOrderStatusController.handle)
OrderRoutes.delete('/orders/:orderId', CancelOrderController.handle);
