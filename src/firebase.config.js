import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAB32EtSYHQypr7vj7a0T-eUBXBsaH3McY",

  authDomain: "resto-hub.firebaseapp.com",

  databaseURL:
    "https://resto-hub-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "resto-hub",

  storageBucket: "resto-hub.appspot.com",

  messagingSenderId: "493075702176",

  appId: "1:493075702176:web:9be856216b6d7085d444c5",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
