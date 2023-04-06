import * as S from './styles';
import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { Menu } from '../components/Menu';
import { Button } from '../components/Button';
import { TableModal } from '../components/TableModal';
import { useState } from 'react';

export function Main() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedTable, setSelectedTable] = useState<string>('');

  const handleSaveTable = (table:string) => {
    setSelectedTable(table);
  };

  const handleCancelOrder = () => {
    setSelectedTable('');
  };

  return(
    <>
      <S.Container>

        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleCancelOrder}
        />

        <S.CategoriesContainer>
          <Categories/>
        </S.CategoriesContainer>

        <S.MenuContainer>
          <Menu/>
        </S.MenuContainer>

      </S.Container>

      <S.Footer>
        <S.FooterContainer>
          {
            !selectedTable &&
            <Button onPress={() => setIsModalVisible(true)}>
            New Order
            </Button>
          }
        </S.FooterContainer>
      </S.Footer>

      <TableModal visible={isModalVisible} onClose={() => setIsModalVisible(false)} onSave={handleSaveTable}/>
    </>
  );
}
