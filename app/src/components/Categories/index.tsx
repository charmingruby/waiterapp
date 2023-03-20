import * as S from './styles';
import { Text } from '../Text';
import { FlatList } from 'react-native';

import { categories } from '../../mocks/categories';
import { useState } from 'react';

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSelectCategory = (categoryId: string) => {
    const categoryValue = categoryId === selectedCategory ? null : categoryId;

    setSelectedCategory(categoryValue);
  };

  return(
    <>
      <FlatList
        data={categories}
        horizontal
        contentContainerStyle={{ paddingRight: 24 }}
        keyExtractor={category => category._id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item: category }) => {
          const isSelected = selectedCategory === category._id;

          return(
            <S.Category onPress={() => handleSelectCategory(category._id)}>

              <S.Icon>
                <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
              </S.Icon>

              <Text size={14} opacity={isSelected ? 1 : 0.5} weight='600'>
                {category.name}
              </Text>
            </S.Category>
          );}}
      />
    </>
  );

}
