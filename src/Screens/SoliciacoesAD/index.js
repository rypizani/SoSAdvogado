import React, {useContext, useEffect,useState} from 'react'; 
import { SafeAreaView, View, ScrollView, StyleSheet } from 'react-native'; 
import { Avatar, Button, Card, Title, Paragraph, TouchableRipple, Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import firebase from '../../services/firebaseConnection'
import {AuthContext} from '../../contexts/auth'



export default function SolicitacoeAD (props) { 


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
          assunto: childItem.val().assunto,
          previa: childItem.val().previa,
          nome: childItem.val().nome,

        };
        setAssunto(oldArray => [...oldArray, list].reverse());
      })
    });
  }

  loadList();

},[])

useEffect(()=>{

  async function loadList2(){
    await firebase.database().ref('usersAD')
    .on('value',(snapshot)=>{
      setPrevia([]);

      snapshot.forEach((childItem)=>{
        let list = {
          categoria: childItem.val().categoria
     

        };
        setPrevia(oldArray => [...oldArray, list].reverse());
      })
    });
  }

  loadList2();

},[])

  return ( 
    <SafeAreaView style={styles.container}> 
      <ScrollView> 
        <View style={styles.container}> 
          <Card>
            <Card.Title title="Rose" subtitle="São Pualo - Tatuapé" />
            <Card.Content>
              <Title></Title>
              <Paragraph></Paragraph>
            </Card.Content>
            <Card.Actions>



<TouchableRipple onPress={() => props.navigation.navigate('ChatAD')}>
<View style={styles.menuItem}>
<MaterialCommunityIcons name="chat" color="#000" size={20}/>
<Text style={styles.menuItemText}>Chat</Text>
</View>
</TouchableRipple>


<TouchableRipple onPress={() =>  console.log(previa)}>
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

