import React, {useState, useContext } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Background, Container, Logo, AreaInput, Input, SubmitButton, 
SubmitText, Link, LinkText} from './styles';
import { AuthContext } from '../../contexts/auth';


export default function Login() {
  const navigation = useNavigation();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {Logar} = useContext(AuthContext)

 function handleLogin(){

    Logar(email, password)
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
          value={email}
          onChangeText={ (text) => setEmail(text) }
          />
        </AreaInput>

        <AreaInput>
          <Input
          placeholder="Senha"
          autoCorrect={false}
          autoCapitalize="none"
          value={password}
          onChangeText={ (text) => setPassword(text) }
          />
        </AreaInput>

      <SubmitButton onPress={handleLogin}>
        <SubmitText>Acessar</SubmitText>
      </SubmitButton>

      <Link onPress={ () => navigation.navigate('Cadastro')}>
        <LinkText>Criar uma conta!</LinkText>
      </Link>

      <Link onPress={ () => navigation.navigate('LoginAD')}>
        <LinkText>Sou Advogado</LinkText>
      </Link>

      </Container>
   </Background>
  );
}