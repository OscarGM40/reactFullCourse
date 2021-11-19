import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
/* 
const firebaseConfig = {
  apiKey: "AIzaSyB5_CDDUTPypF4tbOjpL5pHi9xAuSj1yFY",
  authDomain: "react-app-curso-udemy-e97fe.firebaseapp.com",
  projectId: "react-app-curso-udemy-e97fe",
  storageBucket: "react-app-curso-udemy-e97fe.appspot.com",
  messagingSenderId: "380562023366",
  appId: "1:380562023366:web:da82a64312eac8a1c3c8c7",
};

const firebaseConfigTesting = {
  apiKey: "AIzaSyDmBMgiOIP3H7lQ_ZUeoLnZvFgXm_c1Mwo",
  authDomain: "socialnetworkreact-323713.firebaseapp.com",
  projectId: "socialnetworkreact-323713",
  storageBucket: "socialnetworkreact-323713.appspot.com",
  messagingSenderId: "107230194236",
  appId: "1:107230194236:web:c438a07866ce1d1c473139",
}; */

const firebaseConfig = {
  apiKey:process.env.REACT_APP_APIKEY,
  authDomain:process.env.REACT_APP_AUTHDOMAIN,
  projectId:process.env.REACT_APP_PROJECTID,
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGING_SENDERID,
  appId :process.env.REACT_APP_APPID,
}

// forma no recomendada de agregar varias configuraciones(usar .env.test + .env.development)
/* if (process.env.NODE_ENV === "test") {
  //  configuracion de la db para testing
  firebase.initializeApp(firebaseConfigTesting);
} else {
  //  ambiente development o production
  firebase.initializeApp(firebaseConfig);
}
*/

firebase.initializeApp(firebaseConfig);
// Es obvio que importaciones necesitó cada uno
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
