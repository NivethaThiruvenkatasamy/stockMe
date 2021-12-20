import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';
import { Transaction } from 'src/app/shared/Transaction';
import { doc, setDoc, Timestamp } from "firebase/firestore"; 

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //collectionName = "Users"
  public userDoc:any;
  public data1:any;
  confirmationResult: Observable<any>;
  userId = localStorage.getItem('userId')

  constructor(private fireStore: AngularFirestore) { }

getUserInformation(){
  return this.fireStore.collection('Users').doc("6591344009").valueChanges();
}
updateFollowList(followList){
  this.fireStore.collection('Users').doc("6591344009").update({
    followList: followList
  })
}

createTransaction(transaction: Transaction){
  console.log("inside create transaction");
  this.fireStore.collection('Transactions').doc('transaction').set(
    {
       code: transaction.code,
       phoneNo: transaction.phoneNo,
       quantity: transaction.quantity,
       total: transaction.total,
       price: transaction.price,
       createDate: Timestamp.fromDate(transaction.createdDate),
       isBuy: transaction.isBuy
    }, { merge: true }
  )
 }
setConfirmationResult(confirmationResult){
  this.confirmationResult = confirmationResult;
}

getConfirmationResult(){
  return this.confirmationResult;
}
async createDocument(phoneNumber){
  const ref = this.fireStore.collection("Users").doc(phoneNumber)
  await ref.set({
   availableBalance:"1000",
   followList:[],
   watchList:[]
  })
}
}
