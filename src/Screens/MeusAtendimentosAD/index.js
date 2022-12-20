import React, {useContext, useEffect,useState} from 'react'; 
import { SafeAreaView, View, ScrollView, StyleSheet } from 'react-native'; 
import { Avatar, Button, Card, Title, Paragraph, TouchableRipple, Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import firebase from '../../services/firebaseConnection'
import {AuthContext} from '../../contexts/auth'



export default function MeusAtendimentos (props) { 


const {userAD} = useContext(AuthContext) 
  

const [assunto, setAssunto] = useState()
const [previa, setPrevia] = useState()


useEffect(()=>{

  async function loadList(){
    await firebase.database().ref('solicitacoes')
    .on('value',(snapshot)=>{
      setAssunto([]);

      snapshot.forEach((childItem)=>{
        let list = {
          assunto: childItem.val().assunto
        };
        setAssunto(oldArray => [...oldArray, list].reverse());
      })
    });
  }

  loadList();

},[])

  return ( 
    <SafeAreaView style={styles.container}> 
      <ScrollView> 
        <View style={styles.container}> 
          <Card>
            <Card.Title title="Rose" subtitle="São Pualo - Tatuapé"  />
            <Card.Content>
              <Title>{assunto}</Title>
              <Paragraph>{userAD && userAD.categoria}</Paragraph>
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


<TouchableRipple onPress={() =>  console.log(assunto)}>
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

