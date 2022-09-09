import React from "react";
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";


import { 
    HomeNavigation,
    AtendimentoNavigation,
    ChatNavigation,
    PerfilNavigation,

} from "./StackNavigation";


const Tab = createBottomTabNavigator()



export default function HomeNavigationTabs() {

    return(
          <Tab.Navigator
            screenOptions={{
                headerShown: false,
                unmountOnBlur: true,
                tabBarShowLabel: false,
                tabBarStyle: { height: 50 }
            }}
          >
            <Tab.Screen 
              name='HomeTab' 
              component={HomeNavigation}
               options={{
               tabBarIcon: ({focused }) => (
               <>
                  <FontAwesome5Icon
                  name='home'
                   size={20}
                   color = {focused? '#d7e222' : '#000'}
                    />
                     <Text
                     allowFontScaling={false}
                     style={{
                      color: focused ? '#d7e222' : '#000',
                      fontSize: 11,
                      textAlign:'center'
                     }}
                     >Home</Text>
               </>  
              ),
            }}
             />
            <Tab.Screen 
              name='AtendimentoTab' 
              component={AtendimentoNavigation}
              options={{
                tabBarIcon: ({focused }) => (
                <>
                   <FontAwesome5Icon
                   name='stream'
                    size={20}
                    color = {focused? '#d7e222' : '#000'}
                     />
                      <Text
                     allowFontScaling={false}
                     style={{
                      color: focused ? '#d7e222' : '#000',
                      fontSize: 11,
                      textAlign:'center'
                     }}
                     >Atendimento</Text>
                </>
               ),
             }}/>
            {/* <Tab.Screen
                name='ChatTab' 
               component={ChatNavigation}
               options={{
                tabBarIcon: ({focused }) => (
                <>
                   <FontAwesome5Icon
                   name='comment'
                    size={20}
                    color = {focused? '#d7e222' : '#000'}
                     />
                     <Text
                     allowFontScaling={false}
                     style={{
                      color: focused ? '#d7e222' : '#000',
                      fontSize: 11,
                      textAlign:'center'
                     }}
                     >Chat</Text>
                </>
               ),
             }}/> */}
            <Tab.Screen 
              name='PerfilTab' 
             component={PerfilNavigation}
             options={{
              tabBarIcon: ({focused }) => (
              <>
                 <FontAwesome5Icon
                 name='user'
                  size={20}
                  color = {focused? '#d7e222' : '#000'}
                   />
                    <Text
                     allowFontScaling={false}
                     style={{
                      color: focused ? '#d7e222' : '#000',
                      fontSize: 11,
                      textAlign:'center'
                     }}
                     >Perfil</Text>
              </>
             ),
           }}/>
        </Tab.Navigator>
    );

}

