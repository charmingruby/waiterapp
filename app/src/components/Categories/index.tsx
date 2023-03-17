import * as S from './styles';
import { Text } from '../Text';
import { FlatList } from 'react-native';

import { categories } from '../../mocks/categories';

export function Categories() {

  return(
    <>
      <FlatList
        data={categories}
        horizontal
        contentContainerStyle={{ paddingRight: 24 }}
        keyExtractor={category => category._id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item: category }) => (
          <S.Category>
            <S.Icon>
              <Text>{category.icon}</Text>
            </S.Icon>
            <Text size={14} weight='600'>{category.name}</Text>
          </S.Category>
        )}
      />
    </>
  );

}
