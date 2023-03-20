import { Modal, TouchableOpacity } from 'react-native';
import { Button } from '../Button';
import { Text } from '../Text';
import * as S from './styles';
import { Close } from '../Icons/Close';
import { Platform } from 'react-native';

export function TableModal() {
  return(
    <Modal
      transparent
    >
      <S.Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <S.ModalBody>
          <S.Header>
            <Text weight='600'>Please, inform the table</Text>
            <TouchableOpacity>
              <Close color='#666'/>
            </TouchableOpacity>
          </S.Header>

          <S.Form>
            <S.Input
              placeholder='Table number'
              placeholderTextColor="#666"

            />
            <Button onPress={() => alert('Saved')}>Save</Button>
          </S.Form>
        </S.ModalBody>
      </S.Overlay>
    </Modal>
  );
}
