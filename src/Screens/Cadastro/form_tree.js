import React, { useState, useContext } from "react";
import { Platform, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import RNMultiSelect, { IMultiSelectDataTypes } from "@freakycoder/react-native-multiple-select";


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


const staticData = [
  {
    id: 0,
    value: "Direito do Consumidor",
    isChecked: false,
    // imageSource: require("./assets/money.png"),
  },
  {
    id: 1,
    value: "Direito Trabalhista",
    isChecked: false,
    // imageSource: require("./assets/beer.png"),
  },
  {
    id: 2,
    value: "Direito Civil",
    isChecked: false,
    // imageSource: require("./assets/party.png"),
  },
  {
    id: 3,
    value: "Direito Ambiental",
    isChecked: false,
    // imageSource: require("./assets/food-and-restaurant.png"),
  },
  {
    id: 4,
    value: "Direito Ambiental",
    isChecked: false,
  },
  {
    id: 5,
    value: "Direito Penal",
    isChecked: false,
  },
  {
    id: 6,
    value: "Direito Tributário",
    isChecked: false,
  },
  {
    id: 7,
    value: "Direito Empresarial",
    isChecked: false,
  },
  {
    id: 8,
    value: "Direito Digital",
    isChecked: false,
  },
  {
    id: 9,
    value: "Direito Eleitoral",
    isChecked: false,
  },
  {
    id: 10,
    value: "Direito Imobiliário",
    isChecked: false,
  },
  {
    id: 11,
    value: "Direito Desportivo",
    isChecked: false,
  },
  {
    id: 12,
    value: "Direito Rural",
    isChecked: false,
  },
  {
    id: 13,
    value: "Direitos Humanos",
    isChecked: false,
  },{
    id: 14,
    value: "Direito da Propriedade Intelectual",
    isChecked: false,
  },
];

const App = () => {

  const [dynamicData, setDynamicData] = React.useState ([]);

  const [categoria, setCategoria] = useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setDynamicData(staticData);
    }, 2000);
  }, []);



  const { Cadastrar, pagina3, setPagina1, dates, duo} = useContext(AuthContext);



  function handleSignUp() {

    const { email, password, tell } = duo
     const { nascimento, cpf, nome,  } = dates

     

     Cadastrar(email, password, nome, categoria, nascimento, cpf, tell, );
   }

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        

         <AreaInput>
          
       
         <RNMultiSelect
            disableAbsolute
            placeholder="Selecione a sua Categoria"
            fillColor="red"
            data={dynamicData}
            onSelect={(selectedItems) => setCategoria(selectedItems)
            }/>


           <SubmitButton onPress={(handleSignUp)}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>
        </AreaInput>

        
      
      </Container>
    </Background>
  );
}
export default App;
