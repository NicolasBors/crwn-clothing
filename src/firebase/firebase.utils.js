import firebase from 'firebase/app'
import firestore from 'firebase/firestore'
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;    

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()    

    console.log(snapShot);
    

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}


firebase.initializeApp(config)

export const firestore = firebase.firestore()

export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
