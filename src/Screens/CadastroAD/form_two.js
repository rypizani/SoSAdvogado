import React, { useState, useContext } from "react";
import { Platform, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


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
    endereco: yup.string().min(6, "Escreva seu Endereço").required("Informe seu Endereço"),


});

export default function CadastroAD() {
  const navigation = useNavigation();


  const { CadastrarAD, pagina2AD, setPagina1, datesAD} = useContext(AuthContext);


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleSignUp(data) {

     const { email, password, endereco } = data
     const { nascimento, cpf, nome, tell } = datesAD
 
     CadastrarAD(email, password, nome, endereco, nascimento, cpf, tell);
     console.log(data)
     console.log(datesAD)

   }

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        {pagina2AD &&

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
            name="endereco"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={[
                  {
                    borderWidth: errors.endereco && 1,
                    borderColor: errors.endereco && "#ff375b",
                  },
                ]}
                placeholder="Digite seu Endereço com Numero"
                value={value}
                onBlur={onBlur}
                autoCorrect={false}
                onChangeText={onChange}
              />
            )}
          />
          {errors.endereco && (
            <Text style={styles.labelError}>{errors.endereco?.message}</Text>
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
