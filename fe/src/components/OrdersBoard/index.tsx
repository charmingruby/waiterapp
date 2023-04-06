import { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { api } from '../../utils/api';
import {toast} from 'react-toastify';
import * as S from './styles';

type OrdersBoardProps = {
  icon: string
  title: string
  orders: Order[]
  onCancelOrder: (orderId:string) => void
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void
}

export function OrdersBoard({ icon, title, orders, onCancelOrder, onChangeOrderStatus }:OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOpenModal = (order:Order) => {
    setSelectedOrder(order);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
    setIsModalVisible(false);
  };

  const handleCancelOrder = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    await api.delete(`/orders/${selectedOrder?._id}`);

    toast.success(`The order from the Table - ${selectedOrder?.table} was cancelled`);
    onCancelOrder(selectedOrder!._id);
    setIsLoading(false);
    setIsModalVisible(false);
  };

  const handleChangeOrderStatus = async () => {
    setIsLoading(true);

    const status = selectedOrder?.status === 'WAITING'
      ? 'IN PRODUCTION'
      : 'DONE';

    await api.patch(`/orders/${selectedOrder?._id}`, {status: status});

    toast.success(`The order from the ${selectedOrder?.table} Table was changed`);
    onChangeOrderStatus(selectedOrder!._id, status);
    setIsLoading(false);
    setIsModalVisible(false);
  };

  return(
    <S.Board>
      <header>
        <OrderModal
          visible={isModalVisible}
          order={selectedOrder}
          onClose={handleCloseModal}
          onCancelOrder={handleCancelOrder}
          isLoading={isLoading}
          onChangeOrderStatus={handleChangeOrderStatus}
        />
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      { orders.length > 0 &&
        <S.OrdersContainer>
          {
            orders.map((order) => (
              <button type='button' key={order._id} onClick={() => handleOpenModal(order)}>
                <strong>Table {order.table}</strong>
                <span>{order.products.length} Items</span>
              </button>
            ))
          }
        </S.OrdersContainer>
      }
    </S.Board>
  );
}
