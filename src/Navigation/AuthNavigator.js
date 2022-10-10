import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {Login,Cadastro, LoginAD, CadastroAD} from '../Screens';

const AuthStack = createNativeStackNavigator();

function AuthNavigator(){


    return(
    <AuthStack.Navigator>
        <AuthStack.Screen 
        name="Login" 
        component={Login}
        options={{headerShown: false}}
        />

<AuthStack.Screen 
        name="LoginAD" 
        component={LoginAD}
        options={{headerShown: false}}
        />


        <AuthStack.Screen 
        name="Cadastro" 
        component={Cadastro}
        options={{
            headerStyle:{
                backgroundColor: '#131313',
                borderBottomWidth: 1,
                borderBottomColor: '#00b94a'
            },
            headerTintColor: '#FFF',
            headerBackTitleVisible: false,
            headerTitle: 'Voltar'
        }}
        />
         <AuthStack.Screen 
        name="CadastroAD" 
        component={CadastroAD}
        options={{
            headerStyle:{
                backgroundColor: '#131313',
                borderBottomWidth: 1,
                borderBottomColor: '#00b94a'
            },
            headerTintColor: '#FFF',
            headerBackTitleVisible: false,
            headerTitle: 'Voltar'
        }}
        />


        
    </AuthStack.Navigator>
    );
}

export default AuthNavigator;