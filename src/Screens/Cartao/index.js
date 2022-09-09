import React from 'react';
import {View, SafeAreaView, StyleSheet, Image} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
  
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Cartao = (props) => {


  return (
    
    <SafeAreaView style={styles.container}>


      <View style={styles.menuWrapper}>
          <View style={styles.menuItem}>

          <Image style={styles.credit} source={require('../../../assets/credit.png')}/> 

          </View>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
          <Text style={styles.menuItemText}>Nome Completo:                                      Usuario da Silva</Text>
          </View>
        </TouchableRipple>
          <View style={styles.menuItem}>
         <Text style={styles.menuItemText}>Numero do Cartão: XXXX.XXXX.XXXX.XXXX</Text>
          </View>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
          <Text style={styles.menuItemText}>Codigo de Segurança:                                 XXXX</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
          <Icon name="credit-card-plus" color="#efbc1c" size={25}/>
          <Text style={styles.menuItemText}>Adicionar novo Cartão</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default Cartao;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#191919'
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    color:'#c9c7c7',
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    color:'#c9c7c7',
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#292929',
    borderBottomWidth: 1,
    borderTopColor: '#292929',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    color:'#c9c7c',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#c9c7c7',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  duplo:{
    color:"#c9c7c"
  },
  credit:{
    marginLeft:50
  }
});