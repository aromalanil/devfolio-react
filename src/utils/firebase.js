import firebase from "firebase";

//console.log(JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG));

const config = {
  apiKey: "AIzaSyCxFJ_Mq0sTHvG60XeqKdFkebJZT3fJIzM",
  authDomain: "devfolio-react.firebaseapp.com",
  databaseURL: "https://devfolio-react.firebaseio.com",
  projectId: "devfolio-react",
  storageBucket: "devfolio-react.appspot.com",
  messagingSenderId: "516710882411",
  appId: "1:516710882411:web:b9992e31ac7d229854e52e"
}

firebase.initializeApp(config);

export default firebase;
