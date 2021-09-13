// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';

// const config = {
//     apiKey: "AIzaSyBy9BcR5MHhy5uG2sxml9yeiOFKHHZsznc",
//     authDomain: "crwn-db-5101c.firebaseapp.com",
//     projectId: "crwn-db-5101c",
//     storageBucket: "crwn-db-5101c.appspot.com",
//     messagingSenderId: "1044258090044",
//     appId: "1:1044258090044:web:b6dbb9bc249cde2ee26739",
//     measurementId: "G-9R4FED2LGG"
// };

// firebase.initializeApp(config);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameter({ prompt: 'select_account' });

// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;

import { initializeApp } from "@firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/firestore";
import "firebase/auth";
 
const config = {
    apiKey: "AIzaSyBy9BcR5MHhy5uG2sxml9yeiOFKHHZsznc",
    authDomain: "crwn-db-5101c.firebaseapp.com",
    projectId: "crwn-db-5101c",
    storageBucket: "crwn-db-5101c.appspot.com",
    messagingSenderId: "1044258090044",
    appId: "1:1044258090044:web:b6dbb9bc249cde2ee26739",
    measurementId: "G-9R4FED2LGG"
};
 
initializeApp(config);
 
export const auth = getAuth();
export const firestore = getFirestore();
 
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
 
export const signInWithGoogle = () => signInWithPopup(auth, provider);
 
export default firebase;