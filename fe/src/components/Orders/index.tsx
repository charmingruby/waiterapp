import { OrdersBoard } from '../OrdersBoard';
import * as S from './styles';

import { Order } from '../../types/Order';

export function Orders() {
  const orders: Order[] = [{
    '_id': '640979f3c9569faf64d4251f',
    'table': '7',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Four-Cheese Pizza',
          'imagePath': '1678025184953-four-cheese.png',
          'price': 39.99,

        },
        'quantity': 3,
        '_id': '640979f3c9569faf64d42520'
      }
    ],
  }

  ];

  return(
    <S.Container>
      <OrdersBoard
        icon="🕑"
        title="Waiting queue"
        orders={orders}
      />
      <OrdersBoard
        icon="🧑‍🍳"
        title="In production"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Done"
        orders={[]}
      />
    </S.Container>
  );
}
