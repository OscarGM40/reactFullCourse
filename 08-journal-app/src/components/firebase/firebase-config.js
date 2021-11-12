import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
   apiKey: "AIzaSyB5_CDDUTPypF4tbOjpL5pHi9xAuSj1yFY",
   authDomain: "react-app-curso-udemy-e97fe.firebaseapp.com",
   projectId: "react-app-curso-udemy-e97fe",
   storageBucket: "react-app-curso-udemy-e97fe.appspot.com",
   messagingSenderId: "380562023366",
   appId: "1:380562023366:web:da82a64312eac8a1c3c8c7"
  };

  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(); 
//este será el proveedor, es una instancia de clase
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
   db,
   googleAuthProvider,
   firebase
}


 