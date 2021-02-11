import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) { }

  // Creates a new answer array for the current user //
  async createAnswerArray(data: string[]) {
    const user = await this.afAuth.currentUser;
    return this.db.collection('Answers').add({
      answers: data,
      uid: user.uid,
    });
  }

  // Retrieves answer array owned by current user //
  getUserBoards() {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db
            .collection('Answers', ref =>
              ref.where('uid', '==', user.uid).orderBy('priority')
            )
            .valueChanges({ idField: 'id' });
        } else {
          return [];
        }
      })
    );
  }


}