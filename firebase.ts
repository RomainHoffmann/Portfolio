import * as firebase from "firebase/app"
import { initializeApp } from "firebase/app"
import "firebase/firestore"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
}

if (!firebase.getApps().length) {
  initializeApp(firebaseConfig)
}

export default firebase

export const db = getFirestore()

// const createCollection = <T = DocumentData>(collectionName: string) => {
//   return collection(db, collectionName) as CollectionReference<T>
// }

// export const projectCol = createCollection<Project>("programs")
