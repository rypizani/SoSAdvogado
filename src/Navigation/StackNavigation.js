import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import FontAwesome5Icon, { Icon } from "react-native-vector-icons/FontAwesome5";
import HomeNavigationTabs from "./BottomTabs";
import HomeADNavigationTabs from "./BottomTabsAD";


import {
    Login,
    Atendimento,
    Chat,
    Home,
    Perfil,
    Cadastro,
    FormAtendimento,
    MeusAtendimentos,
    Arquivados,
    ChatArquivado,
    Pagamentos,
    Suporte,
    FormaPagamento,
    Cartao,
    Pix,
    HomeAD,
    AtendimentoAD,
    SolicitacoesAD,
    CasoAD,
    MeusAtendimentosAD,
    ChatAD,
    ArquivadosAD,
    ChatArquivadoAD,
    PerfilAD,
    LoginAD

} from '../Screens'
                        
const Stack = createNativeStackNavigator()


export default props => (
    <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{ headerShown:false }}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='LoginAD' component={LoginAD}/>
        <Stack.Screen name='Cadastro' component={Cadastro}/>
        <Stack.Screen name='Home' component={HomeNavigationTabs}/>
        <Stack.Screen name='HomeAD' component={HomeADNavigationTabs}/>



    </Stack.Navigator>
)


export function HomeNavigation({navigation}){
    
        return(
            <Stack.Navigator
             screenOptions= {{ headerShown: true}}>
                         <Stack.Screen name='Home' component={Home}/>
                         <Stack.Screen name='Atendimento' component={Atendimento}/>
                         <Stack.Screen name= 'FormAtendimento' component={FormAtendimento}/>
                          <Stack.Screen name= 'MeusAtendimentos' component={MeusAtendimentos}/>
                         <Stack.Screen name= 'Chat' component={Chat}/>
                          <Stack.Screen name= 'Arquivados' component={Arquivados}/>
                          <Stack.Screen name= 'ChatArquivado' component={ChatArquivado}/>

            </Stack.Navigator>
        )     
}

export function HomeADNavigation({navigation}){
    
    return(
        <Stack.Navigator
         screenOptions= {{ headerShown: true}}>
                     <Stack.Screen name='HomeAD' component={HomeAD}/>

        </Stack.Navigator>
    )     
}



export function AtendimentoNavigation({navigation}){
    
    return(
        <Stack.Navigator screenOptions= {{ headerShown: true}}>
            <Stack.Screen
             name='Atendimento'
            component={Atendimento}
            options={{ 
                    title: 'AtendimentosAD',
                   headerLeft:() => (
                <View style= {{margin: 10}}>
                   {/* <FontAwesome5Icon
                       name='bars'
                       size={25}
                       color={'#000'}
                       onPress={()=> navigation.openDrawer()}
                   /> */}
               </View>
           )
         }}
            />

            <Stack.Screen name= 'FormAtendimento' component={FormAtendimento}/>
            <Stack.Screen name= 'MeusAtendimentos' component={MeusAtendimentos}/>
            <Stack.Screen name= 'Chat' component={Chat}/>
            <Stack.Screen name= 'Arquivados' component={Arquivados}/>
            <Stack.Screen name= 'ChatArquivado' component={ChatArquivado}/>


        </Stack.Navigator>
    )     
}

export function AtendimentoADNavigation({navigation}){
    
    return(
        <Stack.Navigator screenOptions= {{ headerShown: true}}>
            <Stack.Screen
             name='AtendimentoAD'
            component={AtendimentoAD}
            options={{ 
                    title: 'AtendimentoAD',
                   headerLeft:() => (
                <View style= {{margin: 10}}>
               </View>
           )
         }}
            />

            <Stack.Screen name= 'SolicitacoesAD' component={SolicitacoesAD}/>
            <Stack.Screen name= 'CasoAD' component={CasoAD}/>
            <Stack.Screen name= 'MeusAtendimentosAD' component={MeusAtendimentosAD}/>
            <Stack.Screen name= 'ChatAD' component={ChatAD}/>
            <Stack.Screen name= 'ArquivadosAD' component={ArquivadosAD}/>
            <Stack.Screen name= 'ChatArquivadoAD' component={ChatArquivadoAD}/>

        </Stack.Navigator>
    )     
}


export function ChatNavigation({navigation}){
    
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name='Chat' 
            component={Chat}
            options={{ 
                title: 'TelaChat',
                   headerLeft:() => (
                <View style= {{margin: 10}}>
                   {/* <FontAwesome5Icon
                       name='bars'
                       size={25}
                       color={'#000'}
                       onPress={()=> navigation.openDrawer()}
                   /> */}
               </View>
           )
         }}
            />

        </Stack.Navigator>
    )     
}
export function PerfilNavigation({navigation}){
    
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name='Perfil'
            component={Perfil}
            options={{ 
                title: 'TelaPerfil',
                   headerLeft:() => (
                <View style= {{margin: 10}}>
                   {/* <FontAwesome5Icon
                       name='bars'
                       size={25}
                       color={'#000'}
                       onPress={()=> navigation.openDrawer()}
                   /> */}
               </View>
           )
         }}
            />
            <Stack.Screen name= 'Pagamentos' component={Pagamentos}/>
            <Stack.Screen name= 'FormaPagamento' component={FormaPagamento}/>
            <Stack.Screen name= 'Suporte' component={Suporte}/>
            <Stack.Screen name= 'Cartao' component={Cartao}/>
            <Stack.Screen name= 'Pix' component={Pix}/>




        </Stack.Navigator>
    )     
}


export function PerfilADNavigation({navigation}){
    
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name='PerfilAD'
            component={PerfilAD}
            options={{ 
                title: 'TelaPerfilAD',
                   headerLeft:() => (
                <View style= {{margin: 10}}>
                   {/* <FontAwesome5Icon
                       name='bars'
                       size={25}
                       color={'#000'}
                       onPress={()=> navigation.openDrawer()}
                   /> */}
               </View>
           )
         }}
            />
            <Stack.Screen name= 'Pagamentos' component={Pagamentos}/>
            <Stack.Screen name= 'FormaPagamento' component={FormaPagamento}/>
            <Stack.Screen name= 'Suporte' component={Suporte}/>
            <Stack.Screen name= 'Cartao' component={Cartao}/>
            <Stack.Screen name= 'Pix' component={Pix}/>




        </Stack.Navigator>
    )     
}


