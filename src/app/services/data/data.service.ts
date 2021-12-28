import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';
import { Transaction } from 'src/app/shared/Transaction';
import { doc, Firestore, setDoc, Timestamp } from "firebase/firestore"; 
import { IonicSafeString } from '@ionic/angular';
import { collection, query, where ,} from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //collectionName = "Users"
  public userDoc:any;
  public data1:any;
  confirmationResult: Observable<any>;
  userId = localStorage.getItem('userId');
  phoneNo =localStorage.getItem('phoneNo');
 

  constructor(private fireStore: AngularFirestore) { }

getUserInformation(){
  return this.fireStore.collection('Users').doc(this.userId).valueChanges();
}

updateFollowList(followList){
  this.fireStore.collection('Users').doc(this.userId).update({
    followList: followList
  })
}
updatewatchList(watchList){
  this.fireStore.collection('Users').doc(this.userId).update({
    watchList: watchList
  })
}
async setDocument(){
  await this.fireStore.collection("Users").doc(this.phoneNo).set({
    availableBalance:"10000",
    followList:[],
    watchList:[]
  })
}

async createTransactionBuy(transaction: Transaction){
    await this.fireStore.collection('Transactions').doc().set(
    {
       code: transaction.code,
       quantity: transaction.quantity,
       total: transaction.total,
       price: transaction.price,
       createDate:Timestamp.fromDate(transaction.createdDate),
       phoneNo:this.phoneNo,
       isBuy:true
    }, 
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

getTransactionDetails(): Observable<any>{
    return this.fireStore.collection('Transactions', ref => ref.where('phoneNo', '==', this.phoneNo)).valueChanges();
}
}
