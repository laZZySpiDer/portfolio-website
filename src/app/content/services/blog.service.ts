import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})


export class BlogService {

  constructor(private firestore : AngularFirestore) { }

  // will return a observable
  getAllUsers(){
    return this.firestore.collection("profiles").snapshotChanges();
  }

  getAllBlogs(){
    return this.firestore.collection('blogs').snapshotChanges();
  }
}
