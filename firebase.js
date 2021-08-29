import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAx82qG_akShgEvflxpuGwPRVODkHrgR30",
    authDomain: "webapp-6dfad.firebaseapp.com",
    projectId: "webapp-6dfad",
    storageBucket: "webapp-6dfad.appspot.com",
    messagingSenderId: "1095327256900",
    appId: "1:1095327256900:web:efd09b742e39213c530711"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.database();
const auth = app.auth();

export { db, firebase, auth };