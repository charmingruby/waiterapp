import * as S from './styles';

import logo from '../../assets/images/logo.svg';

export function Header() {
  return(
    <S.Container>
      <S.Content>
        <div className='page-details'>
          <h1>Orders</h1>
          <h2>Follow the customers orders</h2>
        </div>
        <img src={logo}/>
      </S.Content>
    </S.Container>
  );
}
