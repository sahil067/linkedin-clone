import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCt96ihzLq0aPr7p8rsUHJCGPJg6egw7dk",
    authDomain: "linkedin-clone-fd19c.firebaseapp.com",
    projectId: "linkedin-clone-fd19c",
    storageBucket: "linkedin-clone-fd19c.appspot.com",
    messagingSenderId: "868180316387",
    appId: "1:868180316387:web:d2976f8f12a4d9731ff5d6",
    measurementId: "G-XXCN4VRJ7T"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };

  