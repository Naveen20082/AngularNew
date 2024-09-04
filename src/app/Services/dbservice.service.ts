import { Injectable } from '@angular/core';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
} from 'firebase/firestore';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root',
})
export class DBServiceService {
  private db: any;
  constructor(private authService: FirebaseService) {
    this.db = getFirestore();
  }

  async addUserSnippet(snippet: { title?: string; quote?: string }) {
    try {
      const docRef = await addDoc(collection(this.db, 'userSnippets'), {
        ...snippet,
        by: this.authService.uid,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  async getAllSnippets() {
    let result: any[] = [];
    const querySnapshot = await getDocs(collection(this.db, 'userSnippets'));
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      result.push({ ...doc.data(), docID: doc.id });
    });

    console.log(result);
    return result;
  }

  async getSnippetsById(docID: string) {
    const docRef = doc(this.db, 'userSnippets', docID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      return docSnap.data();
    } else {
      // docSnap.data() will be undefined in this case
      console.log('No such document!');
      return {
        id: '',
        title: '',
        quote: '',
      };
    }
  }
}
