import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCky48JsGK1G8-gVmrh0Lai6za-ZCThuq0",
    authDomain: "crwn-clothing-db-2aa35.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-2aa35.firebaseio.com",
    projectId: "crwn-clothing-db-2aa35",
    storageBucket: "",
    messagingSenderId: "822764406768",
    appId: "1:822764406768:web:3c771acfacdd08ff"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;