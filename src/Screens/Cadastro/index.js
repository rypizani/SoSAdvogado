import React, {useState, useEffect} from 'react';
import { 
      View,
      KeyboardAvoidingView, 
      Image,
      Text,
      TextInput,
      TouchableOpacity,
      StyleSheet,
      Animated,
      Keyboard,
      } from 'react-native';

import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
    email: yup.string().email("Email Invalido").required("Informe seu email"),
    password: yup.string().min(6,"A senha  deve ter pelo menos 6 digitos").required("Informe sua senha")
})

  export default function App({navigation}){

    const { control, handleSubmit, formState: { errors }} = useForm({
      resolver: yupResolver(schema)
    })


      function handleSignIn(data){ 
          console.log(data);

      }



      const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
      const [opacity] = useState(new Animated.Value(0));
      const [logo] = useState(new Animated.ValueXY({x:300, y:200}))

      useEffect(()=> {
        KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
        KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)


        Animated.parallel([
          Animated.spring(offset.y, {
            toValue:0,
            speed: 1,
            bounciness: 15,
            useNativeDriver: false
          }),  
          Animated.timing(opacity, {
            toValue:1,
            duration:600,
            useNativeDriver: false
          })
          
        ]).start();

      },[])

      function keyboardDidShow(){

          Animated.parallel([
            Animated.timing(logo.x, {
              toValue: 150,
              duration:100,
            }),
              Animated.timing(logo.y, {
                toValue: 150,
                duration:100,
                useNativeDriver: false
              }),
          ]).start();

        }
      function keyboardDidHide(){
        Animated.parallel([
          Animated.timing(logo.x, {
            toValue: 300,
            duration:100,
            useNativeDriver: false
            }),
            Animated.timing(logo.y, {
              toValue: 200,
              duration:100,
              useNativeDriver: false          
              }),
        ]).start();

      }

     return(
      <KeyboardAvoidingView style={styles.backgound}>
    

    <View><Text style={styles.cadastro}>Registre-se</Text></View>


        <Animated.View 
        style={[
          styles.container,
          {
            opacity: opacity,
              transform: [
                {translateY: offset.y}
              ]
          }
          ]}>

            <Controller
              control={control}
              name="email"
              render={({field: {onChange, onBlur, value}}) => (
              <TextInput
              style={[styles.input, {
                borderWidth: errors.email && 1,
                borderColor: errors.email && '#ff375b'
                }]}
              placeholder="Digite seu E-mail"
              value={value}
              onBlur={onBlur}
              autoCorrect={false}
              onChangeText={onChange}
              /> 
            )}
            />
              {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}
              

            <Controller
              control={control}
              name="password"
              render={({field: {onChange, onBlur, value}}) => (
              <TextInput
              style={[styles.input, {
                borderWidth: errors.password && 1,
                borderColor: errors.password && '#ff375b'
                }]}
              placeholder="Digite sua senha"
              value={value}
              onBlur={onBlur}
              autoCorrect={false}
              onChangeText={onChange}
              secureTextEntry={true}
              /> 
            )}
            />
             {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}

         
            
          <TouchableOpacity style={styles.btnAcessar}>
            <Text style={styles.btnTextoAcessar} onPress={handleSubmit(handleSignIn)}>Concluir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCriar}>
            <Text style={styles.btnTextoCriar}
                  onPress={() => navigation.navigate('Login')}>Login</Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
    )
  }


  const styles = StyleSheet.create({
    backgound:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#191919'
    },
    container:{
        marginTop:10,
      flex:1,
      alignItems: 'center',
      width:'90%',
      paddingBottom: 50,
    },
    input:{
      backgroundColor:'#FFF',
      width:'90%',
      marginBottom:15,
      color:'#222',
      fontSize:17,
      borderRadius: 7,
      padding:10,
    },
    btnAcessar:{
        backgroundColor: '#efbc1c',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7, 
    },
   btnTextoAcessar:{
    color:'#FFF',
    fontSize: 18,
    },
    btnCriar:{
      marginTop: 10,
    },
    btnTextoCriar:{
      color: '#FFF',
    },
    labelError:{
      alignSelf:'flex-start',
      color: '#ff375b',
      marginBottom:7,
    },
    cadastro:{
        fontSize:20,
        color: '#FFF',
        marginTop:200,  
    },
  });