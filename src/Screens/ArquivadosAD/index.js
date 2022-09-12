import React from 'react'; 
import { SafeAreaView, View, ScrollView, StyleSheet} from 'react-native'; 
import { Avatar, Button, Card, Title, Paragraph, TouchableRipple, Text} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const LeftContent = () => <MaterialCommunityIcons name="account-circle" size={24} color="black" />

const App = (props) => { 
  return ( 
    <SafeAreaView style={styles.container}> 
      <ScrollView> 
        <View style={styles.container}> 
          <Card>
            <Card.Title title="Felipe" subtitle="São Paulo - Brigadeiro" left={LeftContent} />
            <Card.Content>
                <View><Text>Arquivado em 13/12/2009</Text></View>
              <Title>Caso Trabalhista</Title>
              <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Paragraph>
            </Card.Content>
            <Card.Actions>
            <TouchableRipple onPress={() => props.navigation.navigate('ChatArquivadoAD')}>
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

            </Card.Actions>
          </Card>             
        </View> 
      </ScrollView> 
    </SafeAreaView> 
  ); 
};

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    paddingTop: 10, 
    backgroundColor: '#191919', 
  }, 
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  menuItemText: {
    color: '#c9c7c7',
    marginLeft: 5,
    fontWeight: '600',
    fontSize: 15,
  },
});

export default App;