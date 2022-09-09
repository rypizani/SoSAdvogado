import React from 'react'; 
import { SafeAreaView, View, ScrollView, StyleSheet } from 'react-native'; 
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = () => <Avatar.Icon size={50} icon="account-circle" backgroundColor="#fff" color="#000" />

const App = (props) => { 
  return ( 
    <SafeAreaView style={styles.container}> 
      <ScrollView> 
        <View style={styles.container}> 
          <Card>
            <Card.Title title="Cleiton" subtitle="São Paulo - Mooca" left={LeftContent} />
            <Card.Content>
              <Title>Caso Criminalista (TITULO)</Title>
              <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button icon="eye-circle" color="#000" onPress={() => props.navigation.navigate('CasoAD')}>
                Ver Mais
              </Button>
              <Button icon="check-circle"  color="#000" onPress={() => alert('Aceito com Sucesso')}>
                Aceitar
              </Button>
              <Button icon="close-circle"  color="#000" onPress={() => alert('Recusado com Sucesso')}>
                Recusar
              </Button>
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
});

export default App;