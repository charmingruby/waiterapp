import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,0.8);
  backdrop-filter: blur(4.5px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  max-width: 480px;
  width: 100%;
  padding: 32px;
  border-radius: 8px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 24px;
    }

    button {
      border: 0;
      background: transparent;
      display: flex;
    }
  }
`;

export const StatusContainer = styled.div`
  margin-top: 32px;

  div {
    margin-top: 8px;
    display: flex;
    align-items: center;
    gap: 8px;

    small {
      font-size: 14px;
      opacity: 0.8;
    }

    strong {
      font-size: 20px;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 16px;

    .item {
      display: flex;

      & + .item {
        margin-top: 16px;
      }

      img {
        width: 56px;
        height: 28.51px;
        border-radius: 6px;
      }

      .quantity {
        font-size: 14px;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details {
        margin-left: 4px;

        strong {
          display: block;
          margin-bottom: 4px;
        }

        small {
          font-size: 14px;
          color: #666;
        }
      }
    }
  }
  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;

    span {

    }
  }
`;

export const OrderActions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .primary {
    background-color: #333333;
    border-radius: 48px;
    border: none;
    color: #fff;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .secondary {
    background-color: transparent;
    border: none;
    padding: 12px 24px;
    color: #d73035;
    font-weight: bold;
    margin-top: 8px;
  }
`;
