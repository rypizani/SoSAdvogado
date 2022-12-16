import { startAt } from '@firebase/firestore';
import React from 'react';
import { View, Text } from 'react-native';
import { Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import {Container, Tipo, IconView, TipoText, ValorText} from './styles';

export default function HistoricoList({ data }) {
 return (
    <SafeAreaView style={styles.container}> 
    <ScrollView> 
      <View style={styles.container}> 
        <Card>
          <Card.Title title="Rose" subtitle="São Pualo - Tatuapé" left={LeftContent} />
          <Card.Content>
            <Title>{data.assunto}</Title>
                <Paragraph>{data.previa}</Paragraph>
          </Card.Content>
          <Card.Actions>



<TouchableRipple onPress={() => props.navigation.navigate('ChatAD')}>
<View style={styles.menuItem}>
<MaterialCommunityIcons name="chat" color="#000" size={20}/>
<Text style={styles.menuItemText}>Chat</Text>
</View>
</TouchableRipple>


<TouchableRipple onPress={() => alert('Documentos')}>
<View style={styles.menuItem}>
<MaterialCommunityIcons name="file-document" color="#000" size={20}/>
<Text style={styles.menuItemText}>Documentos</Text>
</View>
</TouchableRipple>


<TouchableRipple onPress={() => alert('Arquivar')}>
<View style={styles.menuItem}>
<MaterialCommunityIcons name="archive" color="#000" size={20}/>
<Text style={styles.menuItemText}>Arquivar</Text>
</View>
</TouchableRipple>


</Card.Actions>
        </Card>             
      </View> 
    </ScrollView> 
  </SafeAreaView>
  );
}