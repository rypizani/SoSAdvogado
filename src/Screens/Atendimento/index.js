import React from "react";
import { View, Text, Button, TouchableOpacity} from "react-native";
import styles from './styles'

export default props => (

    <View style={styles.container}>

            <Text style={styles.text}>Atendimento</Text>

            <TouchableOpacity style={styles.button}>
            <Text style={styles.text} onPress={() => props.navigation.navigate('FormAtendimento')}>Solicitar Novo Atendimento</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.text} onPress={() => props.navigation.navigate('MeusAtendimentos')}>Meus Atendimentos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text} onPress={() => props.navigation.navigate('Arquivados')}>Atendimentos Arquivados</Text>
          </TouchableOpacity>
    </View>
)



