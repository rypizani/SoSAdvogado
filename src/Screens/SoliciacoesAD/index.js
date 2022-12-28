import React, {useContext, useEffect,useState} from 'react'; 
import { SafeAreaView, View, ScrollView, StyleSheet } from 'react-native'; 
import { Avatar, Button, Card, Title, Paragraph, TouchableRipple, Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import firebase from '../../services/firebaseConnection'
import {AuthContext} from '../../contexts/auth'
import {List, Container, Background, Texto } from '../Login/styles'
import SolicitaList from '../../components/SolicitaList';
import { format } from 'date-fns';




export default function SolicitacoeAD (props) { 


const {userAD} = useContext(AuthContext) 
  

const [assunto, setAssunto] = useState()
const [previa, setPrevia] = useState()




useEffect(()=>{

  async function loadList(){
    await firebase.database().ref('solicitacoes')
      .orderByChild('categoria').equalTo('14')
      .limitToLast(10).on('value', (snapshot)=>{
      setAssunto([]);

      snapshot.forEach((childItem)=>{
        let list = {
          assunto: childItem.val().assunto,
          previa: childItem.val().previa,
          nome: childItem.val().nome,
          categoria:1

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
console.log(previa)
  loadList2();

},[])

  return ( 
    <Background>
      <Container>
      <List
      showsVerticalScrollIndicator={false}
      data={assunto}
      renderItem={ ({ item }) => ( <SolicitaList data={item} /> )}
      />
      
      </Container>
    </Background>
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

