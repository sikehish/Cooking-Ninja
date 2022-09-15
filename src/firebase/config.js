import firebase from 'firebase/app'
import 'firebase/firestore' 

const firebaseConfig = {
    apiKey: "AIzaSyCLVQ9FaqxIC2wDPck0n6sLTLBS5T63Z2M",
    authDomain: "cooking-ninja-site-472e3.firebaseapp.com",
    projectId: "cooking-ninja-site-472e3",
    storageBucket: "cooking-ninja-site-472e3.appspot.com",
    messagingSenderId: "854992678249",
    appId: "1:854992678249:web:96022a9a1bb4b1182fe1f8"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore=firebase.firestore()

  export {projectFirestore}