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
              <RNPickerSelect.Item label="Direito do Consumidor" value="0" />  
              <RNPickerSelect.Item label="Direito Trabalhista" value="1" />
              <RNPickerSelect.Item label="Direito Civil" value="2" />  
              <RNPickerSelect.Item label="Direito Ambiental" value="3" />  
              <RNPickerSelect.Item label="Direito Contratual" value="4" />  
              <RNPickerSelect.Item label="Direito Penal" value="5" /> 
              <RNPickerSelect.Item label="Direito Tributario" value="6" />  
              <RNPickerSelect.Item label="Direito Empresarial" value="7" />  
              <RNPickerSelect.Item label="Direito Digital" value="8" />  
              <RNPickerSelect.Item label="Direito Eleitoral" value="9" />  
              <RNPickerSelect.Item label="Direito Imobiliário" value="10" />  
              <RNPickerSelect.Item label="Direito Desportivo" value="11" />  
              <RNPickerSelect.Item label="Direito Rural" value="12" />  
              <RNPickerSelect.Item label="Direito Humanos" value="13" />
              <RNPickerSelect.Item label="Direito da Propiedade Intelectual" value="14" />  
  

  
            </RNPickerSelect>
        </PickerView>
    )
}