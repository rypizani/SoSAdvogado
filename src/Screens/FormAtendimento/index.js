import React, { useState } from 'react';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { Background, Input, SubmitButton, SubmitText} from './styles';
import Picker from '../../components/Picker';


export default function New() {
 const [assunto, setAssunto] = useState('');
 const [categoria, setCategoria] = useState('categoria1');
 const [previa, setPrevia] = useState('');



 return (
   <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
   <Background>

       <SafeAreaView style={{ alignItems: 'center', marginTop: '50%' }}>
         <Input
         placeholder="Digite o Assunto"
         returnKeyType="next"
         onSubmitEditing={ () => Keyboard.dismiss() }
         value={assunto}sddasa

         
         onChangeText={ (text) => setAssunto(text) }
         />
         
         <Picker onChange={setCategoria} categoria={categoria} />

         <Input
         placeholder="Escreva uma previa"
         returnKeyType="next"
         onSubmitEditing={ () => Keyboard.dismiss() }
         value={previa}
         onChangeText={ (text) => setPrevia(text) }
         />

        <SubmitButton>
          <SubmitText>Registrar</SubmitText>
        </SubmitButton>
       </SafeAreaView>

   </Background>
   </TouchableWithoutFeedback>
  );
}