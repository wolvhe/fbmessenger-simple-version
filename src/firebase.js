import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDIJgBuwhEXGHWH1uFeGVgI_0-Kxtq5MyM",
    authDomain: "fbmsg-wolvhe.firebaseapp.com",
    databaseURL: "https://fbmsg-wolvhe.firebaseio.com",
    projectId: "fbmsg-wolvhe",
    storageBucket: "fbmsg-wolvhe.appspot.com",
    messagingSenderId: "118867998099",
    appId: "1:118867998099:web:db2174e841251c6e346466",
    measurementId: "G-WEZ3NRL155"
});

const db = firebaseApp.firestore();
export default db;