import { Order } from '../../types/Order';
import * as S from './styles';

type OrdersBoardProps = {
  icon: string,
  title: string,
  orders: Order[]
}

export function OrdersBoard({ icon, title, orders }:OrdersBoardProps) {
  console.log(orders);
  return(
    <S.Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>(1)</span>
      </header>
      <S.OrdersContainer>
        <button type='button'>
          <strong>Table 2</strong>
          <span> 2 Items</span>
        </button>
        <button type='button'>
          <strong>Table 2</strong>
          <span> 2 Items</span>
        </button>
      </S.OrdersContainer>
    </S.Board>
  );
}
