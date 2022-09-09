import React from "react";
import { View, Text, Button, TouchableOpacity} from "react-native";
import styles from './styles'

export default props => (

    <View style={styles.container}>

            <Text style={styles.text}>Atendimento</Text>

            <TouchableOpacity style={styles.button}>
            <Text style={styles.text} onPress={() => props.navigation.navigate('SolicitacoesAD')}>Solicitações</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.text} onPress={() => props.navigation.navigate('MeusAtendimentosAD')}>Meus Atendimentos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text} onPress={() => props.navigation.navigate('ArquivadosAD')}>Atendimentos Arquivados</Text>
          </TouchableOpacity>
    </View>
)



