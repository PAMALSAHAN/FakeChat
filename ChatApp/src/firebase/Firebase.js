
import firebase from 'firebase'
import "firebase/firestore"
require('firebase/auth')


var firebaseConfig = {
    apiKey: "AIzaSyBvUbzxTwcWPdC4uH06r_sdFG-XCg-euzA",
    authDomain: "chatapp-4ab81.firebaseapp.com",
    databaseURL: "https://chatapp-4ab81.firebaseio.com",
    projectId: "chatapp-4ab81",
    storageBucket: "chatapp-4ab81.appspot.com",
    messagingSenderId: "490618121486",
    appId: "1:490618121486:web:fdf973be04dd948b04fb5f",
    measurementId: "G-0FXDS5G67H"
};

let Firebase=firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore()
export default Firebase;