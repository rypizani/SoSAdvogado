
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';



let firebaseConfig = {

    apiKey: "AIzaSyAUIcxXpbyWTn6RpdWiw6Fx4762hx6OdTU",
    authDomain: "sosadvogado-21558.firebaseapp.com",
    projectId: "sosadvogado-21558",
    storageBucket: "sosadvogado-21558.appspot.com",
    messagingSenderId: "1067139211695",
    appId: "1:1067139211695:web:c19e6789418d120ec00f5a",
    measurementId: "G-W12PTP5P78"
  };
  
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;