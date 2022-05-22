import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

const firebase = initializeApp(firebaseConfig);



export const firestore = getFirestore(firebase);
export const auth = getAuth(firebase);

export const SignInWithGoogle = async () => {
  var google_provider = new GoogleAuthProvider();
  const res = signInWithPopup(auth, google_provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      return {credential, token , user}
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      return {errorCode,errorMessage,email,credential}
    });
  return res ;
};
export default firebase;
