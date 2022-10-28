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
} from "../Login/styles";
import { AuthContext } from "../../contexts/auth";

const schema = yup.object({
  emailAD: yup.string().email("Email Invalido").required("Informe seu email"),
  passwordAD: yup
    .string()
    .min(6, "A senha  deve ter pelo menos 6 digitos")
    .required("Informe sua senha"),
});

export default function LoginAD() {

  const navigation = useNavigation();

  const {LogarAD} = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleLogin(data) {
    const { emailAD, passwordAD } = data;

    LogarAD(emailAD, passwordAD);
  }

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        <Logo source={require("../../../assets/logo.png")} />

        <AreaInput>
          <Controller
            control={control}
            name="emailAD"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={[
                  {
                    borderWidth: errors.emailAD && 1,
                    borderColor: errors.emailAD && "#ff375b",
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
            <Text style={styles.labelError}>{errors.emailAD?.message}</Text>
          )}

         
        </AreaInput>

        <AreaInput>
          <Controller
            control={control}
            name="passwordAD"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={[
                  {
                    borderWidth: errors.passwordAD && 1,
                    borderColor: errors.passwordAD && "#ff375b",
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
            <Text style={styles.labelError}>{errors.passwordAD?.message}</Text>
          )}
        </AreaInput>

        <SubmitButton onPress={handleSubmit(handleLogin)}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link onPress={() => navigation.navigate("CadastroAD")}>
          <LinkText>Criar uma conta!</LinkText>
        </Link>

        <Link onPress={() => navigation.navigate("Login")}>
          <LinkText>Sou Cliente</LinkText>
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
