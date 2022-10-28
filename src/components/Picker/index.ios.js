import React from 'react';
import { Picker as RNPickerSelect } from '@react-native-picker/picker';
import { PickerView } from './styles';

export default function Picker({ onChange,categoria }){
    return(
        <PickerView>
            <RNPickerSelect
            style={{
                width:'100%'
            }}
            selectedValue={categoria}
            onValueChange={ (valor) => onChange(valor) }
            >
              <RNPickerSelect.Item label="Categoria1" value="categoria1" />  
              <RNPickerSelect.Item label="Categoria2" value="categoria2" />  
            </RNPickerSelect>
        </PickerView>
    )
}