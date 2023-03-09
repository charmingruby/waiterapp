import styled from 'styled-components';

export const Container = styled.header`
  background: #d73035;
  height: 198px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 198px;
  max-width: 1216px;
  margin: 0 auto;
  padding: 0px 2rem;

  .page-details {
    h1 {
      color: #fff;
      font-size: 2rem;
    };

    h2 {
      color: #fff;
      font-size: 1rem;
      font-weight: 400;
      opacity: 0.9;
      margin-top: 6px;
    };
  }
`;
