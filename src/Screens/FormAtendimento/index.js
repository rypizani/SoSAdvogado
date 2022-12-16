import React, { useState, useContext } from 'react';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback, Alert} from 'react-native';
import { Background, Input, SubmitButton, SubmitText} from './styles';
import Picker from '../../components/Picker';
import firebase  from '../../services/firebaseConnection';
import {format} from 'date-fns';
import { date } from 'yup';
import { useNavigation } from '@react-navigation/native';
import {AuthContext} from  '../../contexts/auth'


export default function New() {



 const [assunto, setAssunto] = useState();

 const [categoria, setCategoria] = useState();

 const [previa, setPrevia] = useState();
 const {user} = useContext(AuthContext)



  function handleSubmit(){
    if( assunto == null){
      alert('Preencha todos os campos!')
      return;
    }

    Alert.alert(
      'Confirmando dados',
      `Assunto: ${assunto}                                       Categoria: ${categoria}
      `,
      [
        {
          text:'Cancelar',
          style:'cancel'
        },
        {
          text:'Continuar',
          onPress: () => handleAdd()
        }
      ]
    )

  }

  async function handleAdd(){

    let uiduser = user.uid
    let nome = user.nome


    let key = await firebase.database().ref('solicitacoes').push().key;
    await firebase.database().ref('solicitacoes').child(key).set({
      nome:nome,
      uiduser: uiduser,
      assunto: assunto,
      categoria: categoria,
      previa: previa,
      date: new Date()
    });

    Keyboard.dismiss();
    setAssunto('')
    setPrevia('')

  }

 return (
   <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
   <Background>

       <SafeAreaView style={{ alignItems: 'center', marginTop: '50%' }}>
         <Input
         placeholder="Digite o Assunto"
         returnKeyType="next"
         onSubmitEditing={ () => Keyboard.dismiss() }
         value={assunto}

         
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

        <SubmitButton onPress={handleSubmit}>
          <SubmitText>Registrar</SubmitText>
        </SubmitButton>
       </SafeAreaView>

   </Background>
   </TouchableWithoutFeedback>
  );
}