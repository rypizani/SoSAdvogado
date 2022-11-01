import React, { useState, useContext } from "react";

import { StyleSheet, Modal, Platform } from "react-native";
import { Title, Caption, TouchableRipple } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Feather from "react-native-vector-icons/Feather";

import firebase from "../../services/firebaseConnection";

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
  ButtonBack,
  ModalText,
} from "../Perfil/styles";

import { AuthContext } from "../../contexts/auth";

function PerfilAD(props) {
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState(userAD?.nome);
  
  const [nascimento, setNascimento] = useState(userAD?.nascimento);

  const [tell, setTell] = useState(userAD?.tell);

  const [endereco, setEndereco] = useState(userAD?.endereco);

  const { userAD, deslogar, setUserAD } = useContext(AuthContext);

  async function updateProfile() {
    if (nome == "") {
      return;
    }
    console.log(userAD);
    await firebase.database().ref("usersAD").child(userAD?.uid).update({
      nome: nome,
      nascimento: nascimento,
      tell: tell,
      endereco: endereco,
    });

    let data = {
      uid: userAD.uid,
      nome: nome,
      email: userAD.email,
      nascimento: nascimento,
      tell: tell,
      cpf: userAD.cpf,
      endereco: endereco,
    };

    setUserAD(data);
    console.log(data)
  }

  return (
    <Container>
      <UserInfo>
        <Title
          style={[
            styles.title,
            {
              marginTop: 50,
              marginBottom: 5,
            },
          ]}
        >
          {userAD && userAD.nome}
        </Title>
      </UserInfo>

      <UserInfo>
        <Row>
          <MaterialCommunityIcons
            name="map-marker-radius"
            color="#efbc1c"
            size={20}
          />
          <Text>{userAD && userAD.endereco}</Text>
        </Row>
        <Row>
          <MaterialCommunityIcons name="phone" color="#efbc1c" size={20} />
          <Text>{userAD && userAD.tell}</Text>
        </Row>
        <Row>
          <MaterialCommunityIcons name="email" color="#efbc1c" size={20} />
          <Text>{userAD && userAD.email}</Text>
        </Row>

        <Row>
          <MaterialCommunityIcons
            name="card-account-details-outline"
            color="#efbc1c"
            size={20}
          />
          <Text>{userAD && userAD.cpf}</Text>
        </Row>
        <Row>
          <MaterialCommunityIcons
            name="calendar-account"
            color="#efbc1c"
            size={20}
          />
          <Text>{userAD && userAD.nascimento}</Text>
        </Row>
      </UserInfo>

      

      <ContainerMenu>
        <TouchableRipple onPress={() => setOpen(true)}>
          <MenuItem>
            <MaterialCommunityIcons
              name="account-edit"
              color="#efbc1c"
              size={25}
            />
            <MenuText>Alterar Dados</MenuText>
          </MenuItem>
        </TouchableRipple>

        <TouchableRipple
          onPress={() => props.navigation.navigate("Pagamentos")}
        >
          <MenuItem>
            <MaterialCommunityIcons
              name="credit-card"
              color="#efbc1c"
              size={25}
            />
            <MenuText>Pagamentos e Planos</MenuText>
          </MenuItem>
        </TouchableRipple>

        <TouchableRipple onPress={() => props.navigation.navigate("Suporte")}>
          <MenuItem>
            <MaterialCommunityIcons
              name="account-check-outline"
              color="#efbc1c"
              size={25}
            />
            <MenuText>Suporte</MenuText>
          </MenuItem>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <MenuItem>
            <MaterialCommunityIcons name="cog" color="#efbc1c" size={25} />
            <MenuText>Configurações</MenuText>
          </MenuItem>
        </TouchableRipple>

        <TouchableRipple onPress={() => deslogar()}>
          <MenuItem>
            <MaterialCommunityIcons
              name="exit-to-app"
              color="#efbc1c"
              size={25}
            />
            <MenuText>Deslogar</MenuText>
          </MenuItem>
        </TouchableRipple>
      </ContainerMenu>

      <Modal visible={open} animationType="slide" transparent={true}>
        <ModalContainer behavior={Platform.OS === "android" ? "" : "padding"}>
          <ButtonBack onPress={() => setOpen(false)}>
            <Feather name="arrow-left" size={22} color="#FFF" />
            <ButtonText color="#FFF">Voltar</ButtonText>
          </ButtonBack>
          <ModalText>Nome:</ModalText>
          <Input
            placeholder={userAD?.nome}
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
          <ModalText>Data de Nascimento:</ModalText>
          <Input
            placeholder={userAD?.nascimento}
            value={nascimento}
            onChangeText={(text) => setNascimento(text)}
          />
          <ModalText>Número de Telefone:</ModalText>

          <Input
            placeholder={userAD?.tell}
            value={tell}
            onChangeText={(text) => setTell(text)}
          />

          <ModalText>Endereço com Número:</ModalText>

          <Input
            placeholder={userAD?.endereco}
            value={endereco}
            onChangeText={(text) => setEndereco(text)}
          />

          <Button bg="#efbc1c" onPress={updateProfile}>
            <ButtonText color="#FFF">Salvar</ButtonText>
          </Button>
        </ModalContainer>
      </Modal>
    </Container>
  );
}

export default PerfilAD;

const styles = StyleSheet.create({
  title: {
    color: "#c9c7c7",
    fontSize: 24,
    fontWeight: "bold",
  },
});
