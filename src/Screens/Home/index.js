import React from "react";
import { View, Text, Button, Image, TouchableOpacity} from "react-native";
import Styles from './styles'

export default props => (

    <View style={Styles.container}>

   <Image style={Styles.mapa} source={require('../../../assets/mapa.png')}/>
  

          
          <TouchableOpacity style={Styles.btnAcessar}>
            <Text style={Styles.btnTextoAcessar} onPress={ () => props.navigation.navigate('Atendimento')}>Procurar Advogado</Text>
          </TouchableOpacity>

    </View>
)
