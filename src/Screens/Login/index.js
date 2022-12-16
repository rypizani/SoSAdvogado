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
} from "./styles";
import { AuthContext } from "../../contexts/auth";

const schema = yup.object({
  email: yup.string().email("Email Invalido").required("Informe seu email"),
  password: yup
    .string()
    .min(6, "A senha  deve ter pelo menos 6 digitos")
    .required("Informe sua senha"),
});

export default function Login() {
  const navigation = useNavigation();

  const { Logar } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleLogin(data) {
    const { email, password } = data;

    Logar(email, password);
  }

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        <Logo source={require("../../../assets/logo.png")} />

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

         
        </AreaInput>

        <AreaInput>
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
                placeholder="Digite sua senha"
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
        </AreaInput>

        <SubmitButton onPress={handleSubmit(handleLogin)}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link onPress={() => navigation.navigate("Cadastro")}>
          <LinkText>Criar uma conta!</LinkText>
        </Link>

        <Link onPress={() => navigation.navigate("LoginAD")}>
          <LinkText>Sou Advogado</LinkText>
        </Link>
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
