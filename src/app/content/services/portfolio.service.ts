import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private firestore: AngularFirestore) { }


  getAllPortfolios() { 
    return this.firestore.collection("projects").valueChanges();
  }
}
