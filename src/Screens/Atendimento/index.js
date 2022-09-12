import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import styles from './styles'

export default props => (

    <View style={styles.container}>

            <Text style={styles.text}>Atendimento</Text>

            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('FormAtendimento')}>
            <Text style={styles.text} >Solicitar Novo Atendimento</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('MeusAtendimentos')}>
            <Text style={styles.text} >Meus Atendimentos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}onPress={() => props.navigation.navigate('Arquivados')}>
            <Text style={styles.text} >Atendimentos Arquivados</Text>
          </TouchableOpacity>
    </View>
)



