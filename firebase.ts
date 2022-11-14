// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3tp9MxaIw-8QhOB_7DFata-xLI8162Nw",
    authDomain: "netflix-clone-605bd.firebaseapp.com",
    projectId: "netflix-clone-605bd",
    storageBucket: "netflix-clone-605bd.appspot.com",
    messagingSenderId: "536922245257",
    appId: "1:536922245257:web:304d40c2ba369a24cd5e58"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }