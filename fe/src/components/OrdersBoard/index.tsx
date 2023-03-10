import { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import * as S from './styles';

type OrdersBoardProps = {
  icon: string,
  title: string,
  orders: Order[]
}

export function OrdersBoard({ icon, title, orders }:OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const handleOpenModal = (order:Order) => {
    setSelectedOrder(order);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
    setIsModalVisible(false);
  };


  return(
    <S.Board>
      <header>
        <OrderModal visible={isModalVisible} order={selectedOrder} onClose={handleCloseModal}/>
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
