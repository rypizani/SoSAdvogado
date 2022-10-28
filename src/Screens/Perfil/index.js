import React, { useState, useContext } from 'react';

import { StyleSheet, Modal, Platform } from 'react-native';
import {
  Title,
  Caption,
  TouchableRipple,

} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';

import firebase from '../../services/firebaseConnection';

import {
  Container,
  UserInfo,
  Row,
  Text,
  ContainerInfoBox,
  InfoBox,
  ContainerMenu,
  MenuItem,
  MenuText,
  Button,
  ButtonText,
  Input,
  ModalContainer,
  ButtonBack

} from './styles'


import { AuthContext } from '../../contexts/auth'



function Perfil(props) {

  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState(user?.nome)
  const { user, deslogar, setUser } = useContext(AuthContext)

  async function updateProfile() {
    if (nome == '') {

      return;


    }
    console.log(user);
    await firebase.database().ref('users').child(user?.uid).update({
      nome: nome
    })

    let data = {
      uid: user.uid,
      nome: nome,
      email: user.email,
    }

    setUser(data)
  }

  return (
    <Container>

      <UserInfo>
        <Title style={[styles.title, {
          marginTop: 50,
          marginBottom: 5,
        }]}>{user && user.nome}</Title>
      </UserInfo>

      <UserInfo>
        <Row>
          <MaterialCommunityIcons name="map-marker-radius" color="#efbc1c" size={20} />
          <Text>Cidade, Pais</Text>
        </Row>
        <Row>
          <MaterialCommunityIcons name="phone" color="#efbc1c" size={20} />
          <Text>+55 (00) 9000-0009</Text>
        </Row>
        <Row>
          <MaterialCommunityIcons name="email" color="#efbc1c" size={20} />
          <Text>{user && user.email}</Text>
        </Row>
      </UserInfo>

      <ContainerInfoBox>
        <InfoBox>
          <Caption style={[styles.duplo, { color: '#c9c7c7' }]}>Seu Plano</Caption>
          <Title style={[styles.duplo, { color: '#c9c7c7' }]}>Premium</Title>

        </InfoBox>
        <InfoBox>
          <Caption style={[styles.duplo, { color: '#c9c7c7' }]}>Renovação</Caption>
          <Title style={[styles.duplo, { color: '#c9c7c7' }]}>12/02</Title>
        </InfoBox>
      </ContainerInfoBox>

      <ContainerMenu>

        <TouchableRipple onPress={() => setOpen(true)}>
          <MenuItem>
            <MaterialCommunityIcons name="account-edit" color="#efbc1c" size={25} />
            <MenuText>Alterar Dados</MenuText>
          </MenuItem>
        </TouchableRipple>

        <TouchableRipple onPress={() => props.navigation.navigate('Pagamentos')}>
          <MenuItem>
            <MaterialCommunityIcons name="credit-card" color="#efbc1c" size={25} />
            <MenuText>Pagamentos e Planos</MenuText>
          </MenuItem>
        </TouchableRipple>

        <TouchableRipple onPress={() => props.navigation.navigate('Suporte')}>
          <MenuItem>
            <MaterialCommunityIcons name="account-check-outline" color="#efbc1c" size={25} />
            <MenuText>Suporte</MenuText>
          </MenuItem>
        </TouchableRipple>

        <TouchableRipple onPress={() => { }}>
          <MenuItem>
            <MaterialCommunityIcons name="cog" color="#efbc1c" size={25} />
            <MenuText>Configurações</MenuText>
          </MenuItem>
        </TouchableRipple>

        <TouchableRipple onPress={() => deslogar()}>
          <MenuItem>
            <MaterialCommunityIcons name="exit-to-app" color="#efbc1c" size={25} />
            <MenuText>Deslogar</MenuText>
          </MenuItem>
        </TouchableRipple>
      </ContainerMenu>



      <Modal visible={open} animationType="slide" transparent={true}>

        <ModalContainer behavior={Platform.OS === 'android' ? '' : 'padding'}>
          <ButtonBack onPress={() => setOpen(false)}>
            <Feather
              name="arrow-left"
              size={22}
              color="#FFF"
            />
            <ButtonText color="#FFF">Voltar</ButtonText>
          </ButtonBack>

          <Input
            placeholder={user?.nome}
            value={nome}
            onChangeText={(text) => setNome(text)}
          />

          <Button bg="#efbc1c" onPress={updateProfile}>
            <ButtonText color="#FFF">Salvar</ButtonText>
          </Button>


        </ModalContainer>
      </Modal>

    </Container>
  );
};

export default Perfil;

const styles = StyleSheet.create({

  title: {
    color: '#c9c7c7',
    fontSize: 24,
    fontWeight: 'bold',
  },
});