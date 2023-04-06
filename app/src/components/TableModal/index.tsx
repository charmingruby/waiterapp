import { Modal, TouchableOpacity } from 'react-native';
import { Button } from '../Button';
import { Text } from '../Text';
import * as S from './styles';
import { Close } from '../Icons/Close';
import { Platform } from 'react-native';
import { useState } from 'react';

interface TableModalProps {
  visible: boolean
  onClose: () => void
  onSave: (table: string) => void
}

export function TableModal({ visible = false, onClose, onSave }: TableModalProps) {
  const [table, setTable] = useState<string>('');

  const handleSaveTable = () => {
    setTable('');
    onSave(table);
    onClose();
  };

  return(
    <Modal
      transparent
      visible={visible}
      animationType="fade"
    >
      <S.Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <S.ModalBody>
          <S.Header>
            <Text weight='600'>Please, inform the table</Text>
            <TouchableOpacity onPress={onClose}>
              <Close color='#666'/>
            </TouchableOpacity>
          </S.Header>

          <S.Form>
            <S.Input
              placeholder='Table number'
              placeholderTextColor="#666"
              keyboardType='number-pad'
              onChangeText={setTable}
            />

            <Button onPress={handleSaveTable} disabled={table.length == 0}>Save</Button>
          </S.Form>
        </S.ModalBody>
      </S.Overlay>
    </Modal>
  );
}
