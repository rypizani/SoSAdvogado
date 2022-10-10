import React, {useState, useContext } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Background, Container, Logo, AreaInput, Input, SubmitButton, 
SubmitText, Link, LinkText} from '../Login/styles';
import { AuthContext } from '../../contexts/auth';


export default function LoginAD() {
  const navigation = useNavigation();


  const [emailAD, setEmailAD] = useState('');
  const [passwordAD, setPasswordAD] = useState('');

  const {LogarAD} = useContext(AuthContext)

 function handleLogin(){

    LogarAD(emailAD, passwordAD)
 }

 return (
   <Background>
      <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled
      >
        <Logo source={require('../../../assets/logo.png')}/>
        
        <AreaInput>
          <Input
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none"
          value={emailAD}
          onChangeText={ (text) => setEmailAD(text) }
          />
        </AreaInput>

        <AreaInput>
          <Input
          placeholder="Senha"
          autoCorrect={false}
          autoCapitalize="none"
          value={passwordAD}
          onChangeText={ (text) => setPasswordAD(text) }
          />
        </AreaInput>

      <SubmitButton onPress={handleLogin}>
        <SubmitText>Acessar</SubmitText>
      </SubmitButton>

      <Link onPress={ () => navigation.navigate('CadastroAD')}>
        <LinkText>Criar uma conta!</LinkText>
      </Link>

      <Link onPress={ () => navigation.navigate('Login')}>
        <LinkText>Sou Cliente</LinkText>
      </Link>

      </Container>
   </Background>
  );
}