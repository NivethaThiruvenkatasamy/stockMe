import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  //collectionName = "Users"
  public userDoc:any;
  public data1:any;

  constructor(private fireStore: AngularFirestore) { }

getUserInformation(){
  return this.fireStore.collection('Users').doc('6589090703').valueChanges();
}
updateFollowList(followList){
  this.fireStore.collection('Users').doc('6589090703').update({
    followList: followList
  })
}
}
