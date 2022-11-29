import React, { useState, useContext } from "react";
import { Platform, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import FormTwo from './form_two';

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
} from "./../Login/styles";
import { AuthContext } from "../../contexts/auth";


const schema = yup.object({
    nascimento: yup.string().min(6, "Escreva sua data de nascimento").required("Informe sua data de nascimento"),
    cpf: yup.string().min(6, "Escreva todos os digitos do seu CPF").required("Informe seu CPF"),
    nome: yup.string().min(3).max(161).required("É necessario Informar seu Nome"),

});

export default function Cadastro() {
  const navigation = useNavigation();

  const [pagina1, setPagina1] = useState(true);

  const { Cadastrar, setPagina2, pagina2, setDates } = useContext(AuthContext);


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleCadastro(data) {

    setPagina2(true)
    setDates({...data})
   setPagina1(false)
  }

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        <Logo source={require("../../../assets/logo.png")} />

        

        {pagina1 ?

         <AreaInput>

          <Controller
            control={control}
            name="nome"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={[
                  {
                    borderWidth: errors.nome && 1,
                    borderColor: errors.nome && "#ff375b",
                  },
                ]}
                placeholder="Digite seu Nome"
                value={value}
                onBlur={onBlur}
                autoCorrect={false}
                onChangeText={onChange}
              />
            )}
          />
          {errors.nome && (
            <Text style={styles.labelError}>{errors.nome?.message}</Text>
          )}

        
       
          
          <Controller
            control={control}
            name="cpf"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={[
                  {
                    borderWidth: errors.cpf && 1,
                    borderColor: errors.cpf && "#ff375b",
                  },
                ]}
                placeholder="Digite seu CPF"
                value={value}
                onBlur={onBlur}
                autoCorrect={false}
                onChangeText={onChange}
              />
            )}
          />
          {errors.cpf && (
            <Text style={styles.labelError}>{errors.cpf?.message}</Text>
          )}
       
         
      
          <Controller
            control={control}
            name="nascimento"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={[
                  {
                    borderWidth: errors.nascimento && 1,
                    borderColor: errors.nascimento && "#ff375b",
                    alignSelf: "flex-start",
                  },
                ]}
                placeholder="Digite sua data de nascimento"
                value={value}
                onBlur={onBlur}
                autoCorrect={false}
                onChangeText={onChange}
              />
            )}
          />
          {errors.nascimento && (
            <Text style={styles.labelError}>{errors.nascimento?.message}</Text>
          )}


           <SubmitButton onPress={handleSubmit(handleCadastro)}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>
        </AreaInput>

        : <FormTwo/> }
      
      </Container>
    </Background>
  );
}

const styles = StyleSheet.create({
  labelError: {
    alignSelf: "flex-start",
    color: "#ff375b",
    marginBottom: 7,
  },
});