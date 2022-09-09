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
            <Card.Title title="Rose" subtitle="São Pualo - Tatuapé" left={LeftContent} />
            <Card.Content>
              <Title>Caso Judicial (TITULO)</Title>
              <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button icon="chat" color="#000" onPress={() => props.navigation.navigate('ChatAD')}>
                Chat
              </Button>
              <Button icon="file-document"  color="#000" onPress={() => alert('Documentos')}>
                Documentos
              </Button>
              <Button icon="archive"  color="#000" onPress={() => alert('Arquivar')}>
                Arquivar
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