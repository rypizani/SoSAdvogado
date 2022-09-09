'use strict';
import { StyleSheet,Dimensions } from "react-native";
const {width,height} = Dimensions.get('window');

module.exports  = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#424242',
      alignItems: 'center',
      justifyContent: 'center',
    },
    divider:{
      width:width,
      height:30,
      backgroundColor:'#424242'
    },
    flhalf:{flex:0.5},
    fl1:{flex:1},frow:{flexDirection:'row'},frowrev:{flexDirection:'row-reverse'},jStart:{justifyContent:'flex-start'},jspaceBw:{justifyContent:'space-between'},jevenSpace:{justifyContent:'space-evenly'},
    username22:{
      fontSize:20
    },
    pdtp10:{
paddingTop:10
    },
   
    bdGrey:{
      borderColor:'#424242'
    }
  });