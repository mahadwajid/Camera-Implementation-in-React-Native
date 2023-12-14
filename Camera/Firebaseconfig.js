import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAn6U8_benGX4j2EODCKRxTcri56T2tPPw",
  authDomain: "firstapp-7172b.firebaseapp.com",
  projectId: "firstapp-7172b",
  storageBucket: "firstapp-7172b.appspot.com",
  messagingSenderId: "719245889881",
  appId: "1:719245889881:web:b748b1f91b89d9d45ffc48"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;