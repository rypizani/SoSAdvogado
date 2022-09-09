import React from 'react';
import {View, SafeAreaView, StyleSheet, Image, Alert} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
  
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const showAlert = () =>
  Alert.alert(
    "CHAVE PIX",
    "CHAVE PARA TRANSFERENCIAS PIX: XXXXXXXXXXXXXXXXXXXXXXXXX",
    [
      {
        text: "Fechar",
        style: "cancel",
      },
      {
        text: "Copiar para área de transferencia",
        onPress: () => Alert.alert("Copiado com Sucesso"),
        style: "cancel",  
      },
    ],
    {
      cancelable: true,
    }
  );

const Pix = (props) => {


  return (
    
    <SafeAreaView style={styles.container}>


      <View style={styles.menuWrapper}>
          <View style={styles.menuItem}>

          <Image style={styles.pix} source={require('../../../assets/pix.png')}/> 

          </View>
        <TouchableRipple onPress={() => {}}>

          <View style={styles.menuItem}>

          <Text style={styles.menuItemText}>Leia o QR Code ou Copie o codigo para sua área de transferencia</Text>
          </View>
        </TouchableRipple>
          <View style={styles.menuItem}>
          <Image style={styles.qrcode} source={require('../../../assets/qrcode.png')}/> 

          </View>
        <TouchableRipple onPress={showAlert}>
          <View style={styles.menuItem}>
          <Text style={styles.menuItemText}>Codigo: XXXXXXXXXXXXXXX</Text>
          </View>
        </TouchableRipple>
        
      </View>
    </SafeAreaView>
  );
};

export default Pix;

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
  pix:{
    marginLeft:120,
    width:100,
    height:100
  },
  qrcode:{
    marginLeft:50,
    width:250,
    height:250
  }
});