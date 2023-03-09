import styled from 'styled-components';

export const Board = styled.div`
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;
  flex: 1;

  header {
    padding: 8px;
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 14px;
    margin-bottom: 24px;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;

  button {
    background: #fff;
    border: 1px solid rgba(204, 204, 204, 0.4);
    height: 128px;
    border-radius: 8px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      font-weight: 500;
    }

    span {
      font-size: 14px;
      color: #666;
    }

  & + button {
    margin-top: 24px;
  }
  }

`;
