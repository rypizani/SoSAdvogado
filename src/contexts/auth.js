import React, { useState, createContext, useEffect } from 'react';
import { Alert } from 'react-native';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { faAward } from '@fortawesome/free-solid-svg-icons';

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [userAD, setUserAD] = useState(null);
    const [loading, setLoading] = useState(true);
    const [pagina2, setPagina2] = useState(false);
    const [dates, setDates] = useState([]);
    const [datesAD, setDatesAD] = useState([]);
    const [pagina2AD, setPagina2AD] = useState(false);



    //manter logado user cliente
useEffect(()=>{

    async function loadStorage(){
        const storageUser = await AsyncStorage.getItem('Auth_user');
        

        if(storageUser){
            setUser(JSON.parse(storageUser))
            setLoading(false);
        }
            setLoading(false);
    }
    loadStorage();
    

},[])


// manter logado user advogado
useEffect(()=>{

    async function loadStorageAD(){
        const storageUserAD = await AsyncStorage.getItem('Auth_userAD');
        

        if(storageUserAD){
            setUserAD(JSON.parse(storageUserAD))
            setLoading(false);
        }
            setLoading(false);
    }
    loadStorageAD();

},[])

    //Funcao para logar o cliente
    async function Logar(email, password){
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async(value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).once('value')
            .then((snapshot)=>{
                let data ={
                    uid: uid,
                    nome: snapshot.val().nome,
                    email: value.user.email
                };
                setUser(data);
                storageUser(data);

            })
        })
        .catch((error)=> {
            alert(error.code);
        })
    }
        //Funcao para logar o Advogado
        async function LogarAD(email, password){
            await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async(value)=>{
                let uid = value.user.uid;
                await firebase.database().ref('usersAD').child(uid).once('value')
                .then((snapshot)=>{
                    let dataAD ={
                        uid: uid,
                        nome: snapshot.val().nome,
                        email: value.user.email
                    };
                    setUserAD(dataAD);
                    storageUserAD(dataAD);

                })
            })
            .catch((error)=> {
                alert(error.code);
            })
        }


    //cadastrar  cliente
    async function Cadastrar(email, password, nome, endereco, nascimento, cpf, tell){
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(async(value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('user').child(uid).set({
                nome: nome,
                endereco: endereco,
                nascimento: nascimento,
                cpf: cpf,
                tell: tell,
            })
            .then (()=>{
                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email.trim(),
                    endereco: endereco,
                    nascimento: nascimento,
                    cpf: cpf,
                    tell: tell,
                    

                };
                setUser(data);
                storageUser(data);

            })
            
        })
        .catch(()=>{
            alert(error.code);
        })
    }

    //cadastrar  Advogado
    async function CadastrarAD(email, password, nome, endereco, nascimento, cpf, tell){
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(async(value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('usersAD').child(uid).set({
                nome: nome,
                endereco: endereco,
                nascimento: nascimento,
                cpf: cpf,
                tell: tell,
            })
            .then (()=>{
                
                let dataAD = {
                uid: uid,
                nome: nome,
                email: value.user.email,
                endereco: endereco,
                nascimento: nascimento,
                cpf: cpf,
                tell: tell,

                };
                setUserAD(dataAD);
                storageUserAD(dataAD);
            })
        })
        .catch(()=>{
            alert(error.code);
        })
    }


    // manter logado user cliente
     async function storageUser(data){
         await AsyncStorage.setItem('Auth_user', JSON.stringify(data))
     }

    //manter logado user advogado
    async function storageUserAD(dataAD){
       await AsyncStorage.setItem('Auth_userAD', JSON.stringify(dataAD))
    }

// deslogar
    async function deslogar(){
        await firebase.auth().signOut();
        await AsyncStorage.clear()
        .then(() => {
            setUser(null);
            setUserAD(null);
         })
    
    }


    return(
     <AuthContext.Provider value={{ 
        signed: !!user,
         user,
          Cadastrar,
           Logar,
            signedAD: !!userAD,
             userAD, CadastrarAD,
              LogarAD,
               loading,
               deslogar,
               setUser,
               setUserAD,
               storageUser,
               storageUserAD,
               setPagina2,
               pagina2,
               dates,
               setDates,
               datesAD,
               setDatesAD,
               pagina2AD,
               setPagina2AD
                }}>
         {children}
     </AuthContext.Provider>   
    );
}

export default AuthProvider;