import * as S from './styles';
import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { Menu } from '../components/Menu';

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
        <S.FooterContainer></S.FooterContainer>
      </S.Footer>
    </>
  );
}
