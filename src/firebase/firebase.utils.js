import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAQodsRT7zcQCAAPahOdpsD6-AVHRqBxOk",
    authDomain: "crwn-db-a7332.firebaseapp.com",
    databaseURL: "https://crwn-db-a7332.firebaseio.com",
    projectId: "crwn-db-a7332",
    storageBucket: "crwn-db-a7332.appspot.com",
    messagingSenderId: "1004657049357",
    appId: "1:1004657049357:web:ba8ad8dc59123eeeceba44",
    measurementId: "G-KCY8P711R6"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
