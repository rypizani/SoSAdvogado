

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
        Button,
        } from 'react-native';
  
  import {useForm, Controller} from 'react-hook-form';
  import {yupResolver} from '@hookform/resolvers/yup'
  import * as yup from 'yup'
  
  const schema = yup.object({
      assunto: yup.string().min(3,"O Assunto deve ser conter no minimo ").required("informe o Assunto"),
     previa: yup.string().min(10,"Escreva uma previa do seu problema").required("Informe a Previa"),
  })
  
    export default function App ({navigation}){
  
      const { control, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
       })
  
  
        function handleSignIn(data){ 
          alert('Enviado com Sucesso');
  
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
                useNativeDriver: false
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
          <View style={styles.containerLogo}>
            <Animated.Image
            style={{
  
  
              width:logo.x,
              height:logo.y,
            } }
             source={require('../../../assets/logo.png')} 
            />
          </View>
  
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
                name="Assunto"
                render={({field: {onChange, onBlur, value}}) => (
                  
                <TextInput
                style={[styles.input, {
                  borderWidth: errors.assunto && 1,
                  borderColor: errors.assunto && '#ff375b'
                  }]}
                placeholder="Assunto"
                value={value}
                onBlur={onBlur}
                autoCorrect={false}
                onChangeText={onChange}
                /> 
                
              )}
  
              />
                {errors.assunto && <Text style={styles.labelError}>{errors.assunto?.message}</Text>}
  
              
  
  
                <Controller
                control={control}
                name="Previa"
                render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                style={[styles.input, {
                  borderWidth: errors.previa && 1,
                  borderColor: errors.previa && '#ff375b'
                  }]}
                placeholder="Informe seu Problema"
                value={value}
                onBlur={onBlur}
                autoCorrect={false}
                onChangeText={onChange}
                /> 
              )}
              />
                {errors.previa && <Text style={styles.labelError}>{errors.previa?.message}</Text>}
  
           
              
            <TouchableOpacity style={styles.btnAcessar}>
              <Text style={styles.btnTextoAcessar} onPress={handleSubmit(handleSignIn)}>Enviar Para Suporte</Text>
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
  
      containerLogo:{
        flex:1,
        justifyContent:'center',
  
      },
      container:{
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
      }
  
  
    });