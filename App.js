import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthProvider from "./src/contexts/auth";

import Navigation from './src/Navigation'


export default function App() {
    return(

    <NavigationContainer>

         <AuthProvider>
        <Navigation/>
        </AuthProvider>

    </NavigationContainer>

    )
}