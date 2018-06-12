import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAoOpMhKjWzPDacN9KXmr_X5zKCtjpqLgM",
    authDomain: "forms-288da.firebaseapp.com",
    databaseURL: "https://forms-288da.firebaseio.com",
    projectId: "forms-288da",
    storageBucket: "forms-288da.appspot.com",
    messagingSenderId: "589644903847"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const googleAuth = new firebase.auth.GoogleAuthProvider();

export {
    firebase,
    firebaseDB,
    googleAuth

}