import * as S from './styles';
import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { Menu } from '../components/Menu';
import { Button } from '../components/Button';
import { TableModal } from '../components/TableModal';

export function Main() {
  return(
    <>
      <S.Container>

        <Header/>

        <S.CategoriesContainer>
          <Categories/>
        </S.CategoriesContainer>

        <S.MenuContainer>
          <Menu/>
        </S.MenuContainer>

      </S.Container>

      <S.Footer>
        <S.FooterContainer>
          <Button onPress={() => alert('New Order')} disabled>
            New Order
          </Button>
        </S.FooterContainer>
      </S.Footer>

      <TableModal/>
    </>
  );
}
