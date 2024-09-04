import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  public uid: string;
  constructor(public http: HttpClient, private Router: Router) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        this.uid = user.uid;
        console.log('User ------>', this.uid);
        // ...
      } else {
        // User is signed out
        // ...
        this.uid = undefined;
        console.log('User Out------>', this.uid);
      }
    });
  }

  registerUser(email: string, password: string) {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);

        this.Router.navigate(['/home']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error(errorCode, errorMessage);
        alert('Something went wrong');
      });
  }

  loginUser(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        this.Router.navigate(['/home']);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  }

  logOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('Sign-out successful.');
        this.Router.navigate(['/home']);
      })
      .catch((error) => {
        // An error happened.
        console.log('An error happened.');
      });
  }

  isAuthenticate() {
    return this.uid ? true : false;
  }

  signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    const auth = getAuth();
    auth.languageCode = 'it';
    provider.setCustomParameters({
      login_hint: 'user@example.com',
    });

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log({ user, token, credential, result });
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.error({
          errorCode,
          errorMessage,
          email,
          credential,
        });
        // ...
      });
  }
}
