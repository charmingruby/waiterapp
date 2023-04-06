import { OrdersBoard } from '../OrdersBoard';
import * as S from './styles';
import socketIo from 'socket.io-client';
import { Order } from '../../types/Order';
import { useEffect, useState } from 'react';
import { api } from '../../utils/api';

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const socket = socketIo('http://localhost:3003', {
      transports: ['websocket']
    });

    socket.on('orders@new', (order) => {
      setOrders(prevState => prevState.concat(order));
    });

  }, []);

  useEffect(() => {
    api.get('orders')
      .then(({data}) => {
        setOrders(data);
      })
    ;
  }, []);

  const waitingList = orders.filter((order) => order.status === 'WAITING');
  const inProductionList = orders.filter((order) => order.status === 'IN PRODUCTION');
  const doneList = orders.filter((order) => order.status === 'DONE');

  function handleCancelOrder(orderId: string) {
    setOrders((prevState) => prevState.filter(order => order._id !== orderId));
  }

  function handleOrderStatusChange(orderId:string, status: Order['status']) {
    setOrders((prevState) => prevState.map((order) => (
      order._id === orderId
        ? {...order, status}
        : order
    )));
  }

  return(
    <S.Container>
      <OrdersBoard
        icon="🕑"
        title="Waiting queue"
        orders={waitingList}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        icon="🧑‍🍳"
        title="In production"
        orders={inProductionList}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        icon="✅"
        title="Done"
        orders={doneList}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
    </S.Container>
  );
}
