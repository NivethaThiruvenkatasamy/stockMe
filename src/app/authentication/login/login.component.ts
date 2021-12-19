import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {environment} from "src/environments/environment"
import { initializeApp } from "firebase/app";
import { AngularFireAuth } from '@angular/fire/compat/auth';

firebase.initializeApp(environment.firebaseConfig)
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

 phoneNumber:string;
 reCaptchaVerifier: firebase.auth.RecaptchaVerifier;
 confirmationResult:any;
 OTP:string='';


  constructor(private router:Router,private fireAuth:AngularFireAuth) { }

  ngOnInit() {
  }
  navigate(){
    this.router.navigateByUrl('/authentication/signup')
  }
  async ionViewDidEnter() {
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      size: 'invisible',
      callback: (response) => {

      },
      'expired-callback': () => {
      }
    });
  }
  ionViewDidLoad() {
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      size: 'invisible',
      callback: (response) => {

      },
      'expired-callback': () => {
      }
    });
    console.log(this.reCaptchaVerifier);
  }
  getOTP(){
    console.log(this.phoneNumber);
    return new Promise<any>((resolve, reject) => {

      this.fireAuth.signInWithPhoneNumber('+6589090703',this.reCaptchaVerifier)
        .then((confirmationResult) => {
          this.confirmationResult = confirmationResult;
          console.log(confirmationResult);
          resolve(confirmationResult);
          this.router.navigate(['/authentication/otp'],{ state: { currentPage:'signin',confirmationResult: this.confirmationResult } })
        }).catch((error) => {
          console.log(error);
          reject('SMS not sent');
        });
    });
  }
}
