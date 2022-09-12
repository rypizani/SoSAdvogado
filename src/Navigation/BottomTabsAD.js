import React from "react";
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 

import { 
    HomeADNavigation,
    AtendimentoADNavigation,
    ChatNavigation,
    PerfilADNavigation,

} from "./StackNavigation";


const Tab = createBottomTabNavigator()



export default function HomeADNavigationTabs() {

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
              name='HomeADTab' 
              component={HomeADNavigation}
               options={{
               tabBarIcon: ({focused }) => (
               <>
                  <FontAwesome5
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
              name='AtendimentoADTab' 
              component={AtendimentoADNavigation}
              options={{
                tabBarIcon: ({focused }) => (
                <>
                   <FontAwesome5
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
              name='PerfilADTab' 
             component={PerfilADNavigation}
             options={{
              tabBarIcon: ({focused }) => (
              <>
                 <FontAwesome5
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
                     >Perfi</Text>
              </>
             ),
           }}/>
        </Tab.Navigator>
    );

}

