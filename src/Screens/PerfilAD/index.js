import { useContext } from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
  
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {AuthContext} from '../../contexts/auth'


const PerfilAD = (props) => {

  const {userAD, deslogar} = useContext (AuthContext)

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          {/* <Avatar.Image 
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={80}
          /> */}
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>{userAD && userAD.nome}</Title>
            <Caption style={styles.caption}>@Usuario</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
        <MaterialCommunityIcons name="map-marker-radius" color="#efbc1c" size={20}/>
        <Text style={{color:"#c9c7c7", marginLeft: 20}}>Cidade, Pais</Text>
        </View>
        <View style={styles.row}>
        <MaterialCommunityIcons name="phone" color="#efbc1c" size={20}/>
        <Text style={{color:"#c9c7c7", marginLeft: 20}}>+55 (00) 9000-0009</Text>
        </View>
        <View style={styles.row}>
        <MaterialCommunityIcons name="email" color="#efbc1c"  size={20}/>
          <Text style={{color:"#c9c7c7", marginLeft: 20}}>usuario@email.com</Text>
        </View>
      </View>

      <View style={styles.menuWrapper}>
      <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
          <MaterialCommunityIcons name="account-edit" color="#efbc1c" size={25}/>
         <Text style={styles.menuItemText}>Alterar Dados</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => alert('Dados Bancarios')}>
          <View style={styles.menuItem}>
          <MaterialCommunityIcons name="credit-card" color="#efbc1c" size={25}/>
          <Text style={styles.menuItemText}>Dados Bancarios</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => props.navigation.navigate('Suporte')}>
          <View style={styles.menuItem}>
          <MaterialCommunityIcons name="account-check-outline" color="#efbc1c" size={25}/>
         <Text style={styles.menuItemText}>Suporte</Text>
          </View> 
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
          <MaterialCommunityIcons name="cog" color="#efbc1c" size={25}/>
          <Text style={styles.menuItemText}>Configurações</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => deslogar()}>
          <View style={styles.menuItem}>
          <MaterialCommunityIcons name="exit-to-app" color="#efbc1c" size={25}/>
          <Text style={styles.menuItemText}>Deslogar</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default PerfilAD;

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
});