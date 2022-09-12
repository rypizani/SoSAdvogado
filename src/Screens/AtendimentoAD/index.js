import React from "react";
import { View, Text, Button, TouchableOpacity} from "react-native";
import styles from './styles'


export default props => (

    <View style={styles.container}>

            <Text style={styles.text}>Atendimento</Text>

            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('SolicitacoesAD')}>
            <Text style={styles.text} >Solicitações</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('MeusAtendimentosAD')}>
            <Text style={styles.text} >Meus Atendimentos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('ArquivadosAD')}> 
            <Text style={styles.text} >Atendimentos Arquivados</Text>
          </TouchableOpacity>
    </View>
)



