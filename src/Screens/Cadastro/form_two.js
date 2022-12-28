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
    email: yup.string().email("Email Invalido").required("Informe seu email"),
    password: yup.string().min(6, "A senha  deve ter pelo menos 6 digitos").required("Informe sua senha"),    
    tell: yup.string().min(6, "Escreva todos os numeros do seu telefone").required("Informe seu Telefone"),


});

export default function Cadastro() {
  const navigation = useNavigation();


  const { Cadastrar, pagina2, setPagina1, dates} = useContext(AuthContext);


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleSignUp(data) {

     const { email, password, tell } = data
     const { nascimento, cpf, nome } = dates
 
     Cadastrar(email, password, nome, nascimento, cpf, tell);

   }

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        {pagina2 &&

         <AreaInput>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={[
                  {
                    borderWidth: errors.email && 1,
                    borderColor: errors.email && "#ff375b",
                  },
                ]}
                placeholder="Digite seu E-mail"
                value={value}
                onBlur={onBlur}
                autoCorrect={false}
                onChangeText={onChange}
              />
            )}
          />
          {errors.email && (
            <Text style={styles.labelError}>{errors.email?.message}</Text>
          )}
       
       <Controller
            control={control}
            name="tell"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={[
                  {
                    borderWidth: errors.tell && 1,
                    borderColor: errors.tell && "#ff375b",
                  },
                ]}
                placeholder="Digite seu telefone"
                value={value}
                onBlur={onBlur}
                autoCorrect={false}
                onChangeText={onChange}
              />
            )}
          />
          {errors.tell && (
            <Text style={styles.labelError}>{errors.tell?.message}</Text>
          )}
      
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={[
                  {
                    borderWidth: errors.password && 1,
                    borderColor: errors.password && "#ff375b",
                    alignSelf: "flex-start",
                  },
                ]}
                placeholder="Digite sua Senha"
                value={value}
                onBlur={onBlur}
                autoCorrect={false}
                onChangeText={onChange}
              />
            )}
          />
          {errors.password && (
            <Text style={styles.labelError}>{errors.password?.message}</Text>
          )}


           <SubmitButton onPress={handleSubmit(handleSignUp)}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>
        </AreaInput>

        }
      
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