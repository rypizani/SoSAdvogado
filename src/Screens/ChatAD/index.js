import React from "react";
import { StyleSheet,Dimensions,FlatList,View,Image,Text,TouchableOpacity,TextInput, KeyboardAvoidingView } from "react-native";
import styles from './styles';



const DATA_MESSAGES=[
    {id:0,frnName:'Rose',chats:[
      {id:1,text:'Olá',sender:'Rose',},
      {id:1,text:'Oi',sender:'Me',},
      {id:1,text:'Como você está?',sender:'Rose',},
      {id:1,text:'Muito bem e vc?',sender:'Me',},
      {id:1,text:'Estou Otimo',sender:'Rose',},
      {id:1,text:'Que Bom',sender:'Me',},


    ]}
  ]
  
  const {width,height}=Dimensions.get('window');
  const Chats=({item}) => {
    var state=item.sender==="Me"
      return(
      <View style={[styles.pdlt10,styles.mdtp10,styles.mdbt10,styles.pdtp10,item.sender==="Me"? styles.frowrev : styles.frow,styles.jStart]}>
          <View style={state ? styles.pdlt10 : styles.pdrt10}>

          </View>
          <View>
          <View style={[messages.Chat,state ? messages.myChat : messages.frnChat]}>
            <Text style={{lineHeight:25}}>{item.text}</Text>
          </View>
        </View>
      </View>
      )
  };
  


  const ChatScreen=(props)=>{
    const _renderMessages=({item})=>{
      return(
        <Chats item={item} />
      )
    }
    
  const headerComponent=()=>(
    <View style={{flex:1,backgroundColor:'#424242'}}>
          <View style={[{paddingBottom:20},styles.bdbtm4,styles.bdGrey,styles.pdlt10,styles.pdrt10,styles.frow,styles.jspaceBw]}>
            <View>
              <Text style={{fontSize:22,fontWeight:'bold', alignItems:"center"}}>Rose</Text>
              <Text style={[styles.f18,styles.clBl]}>Online</Text>
          
            </View>
            <TouchableOpacity>
              <Image source={require('../../../assets/profile.png')} 
               style={{
                justifyContent: "center",
                 width:50,
                 height:50,
                 borderRadius:50/2
               }}/>
            </TouchableOpacity>
          </View>
          </View>
  )
  
    return(
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboarVerticalOffset ={100}
      style={{flex: 1}}>
      <>
      <FlatList 
        data={DATA_MESSAGES[0].chats}
        renderItem={_renderMessages}
        keyExtractor={(item, index) => String(index)}
        ListHeaderComponent={
          headerComponent
        }
        stickyHeaderIndices={[0]}
        contentContainerStyle = {{flexGrow:1,backgroundColor:'#191919'}}
        
      />
      <View style={{width:width,backgroundColor:'#424242',borderTopColor:'#424242',borderTopWidth:1,paddingTop:15,paddingBottom:5}}>
            <View style={[styles.frow,styles.jspaceBw,styles.pdrt10,styles.pdlt10]}>
              <TextInput multiline={true} placeholder='Escreva Sua Mensagem'
                style={{
                  color:"#c9c7c7",
                  height:45,
                  width:width/1.3
                }}
              />
              <TouchableOpacity>
                <Text style={[styles.fb,styles.clBl]}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </View>
          </>
      </KeyboardAvoidingView>
    )
  }

  const messages=StyleSheet.create({
    Chat:{maxWidth:width/2,padding:10},
    myChat:{
      backgroundColor:'#aaeedd',borderRadius:14
    },
    frnChat:{
      backgroundColor:'#aaeeaa',borderRadius:14
    }
  })

  export default ChatScreen;