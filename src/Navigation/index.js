import  React, {useContext} from "react";

import AuthNavigator from "./AuthNavigator";

import HomeADNavigationTabs from "./BottomTabsAD";

import {AuthContext} from '../contexts/auth';
import HomeNavigationTabs from "./BottomTabs";
import { View, ActivityIndicator } from "react-native";

 function Navigation(){

    const {signed, signedAD, loading} = useContext(AuthContext);


    if (loading){
      return(
        <View style ={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size= "large"color="#efbc1c"/>
        </View>

      )
    }


   if(signed){
      return <HomeNavigationTabs/>
     } else if(signedAD){
      return <HomeADNavigationTabs/>
     } else{
       return <AuthNavigator/>
     }

}

export default Navigation