import * as S from './styles';

import closeButton from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';
import { useEffect } from 'react';

interface Props {
  visible: boolean
  order: Order | null
  onClose: () => void
  onCancelOrder: () => Promise<void>
  onChangeOrderStatus: () => Promise<void>;
  isLoading: boolean
}

export function OrderModal({ visible, order, onClose, onCancelOrder, isLoading, onChangeOrderStatus }:Props) {
  useEffect(() => {
    function handleKeyDown(event:KeyboardEvent) {
      if(event.key == 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if(!visible || !order) {
    return null;
  }

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + (product.price * quantity);
  }, 0);

  return (
    <S.Overlay>
      <S.ModalBody>
        <header>
          <strong>Table {order.table}</strong>
          <button type='button'>
            <img src={closeButton} alt="Close Button" onClick={onClose}/>
          </button>
        </header>
        <S.StatusContainer>
          <small>Order Status</small>
          <div>
            <span>
              { order.status === 'WAITING' && '🕑' }
              { order.status === 'IN PRODUCTION' && '🧑‍🍳' }
              { order.status === 'DONE' && '✅' }
            </span>
            <strong>
              { order.status === 'WAITING' && 'Waiting queue' }
              { order.status === 'IN PRODUCTION' && 'In production' }
              { order.status === 'DONE' && 'Done' }
            </strong>
          </div>
        </S.StatusContainer>
        <S.OrderDetails>
          <strong>Items</strong>
          <div className='order-items'>
            {
              order.products.map(({ _id, product, quantity }) => (
                <div className='item' key={_id}>
                  <img src={`http://localhost:3003/uploads/${product.imagePath}`} alt={product.name} />
                  <span className='quantity'>{quantity}x</span>
                  <div className='product-details'>
                    <strong>{product.name}</strong>
                    <span>{formatCurrency(product.price)}</span>
                  </div>
                </div>
              ))
            }
          </div>
          <div className='total'>
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </S.OrderDetails>
        <S.OrderActions>

          { order.status !== 'DONE' &&
            <button type='button' className='primary' disabled={isLoading} onClick={onChangeOrderStatus}>
              <span>{order.status=== 'WAITING' ? '🧑‍🍳' : '✅' }</span>
              <strong>{order.status=== 'WAITING' ? 'Start Production' : 'Complete Order' }</strong>
            </button>
          }
          <button type='button' className='secondary' onClick={onCancelOrder} disabled={isLoading}>
            <strong>Cancel Order</strong>
          </button>
        </S.OrderActions>
      </S.ModalBody>
    </S.Overlay>
  );
}
