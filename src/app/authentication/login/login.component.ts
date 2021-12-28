import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {environment} from "src/environments/environment"
import { initializeApp } from "firebase/app";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DataService } from 'src/app/services/data/data.service';
import { window } from 'rxjs/operators';

firebase.initializeApp(environment.firebaseConfig)
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

 phoneNumber:string;
 reCaptchaVerifier: firebase.auth.RecaptchaVerifier;
 OTP:string='';
 countryCode:string;


constructor(private router:Router,private fireAuth:AngularFireAuth,private dataService: DataService) { }

ngOnInit() {
    console.log("[ngOnint - LoginComponent]");

}

/*---------------------------------------------------
        navigate to signup page
-----------------------------------------------------*/
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
}

getCountryCode(event){
  this.countryCode = event;
}

/*---------------------------------------------------
      Call fireauth signIn with phone number
      Navigate to otp page
-----------------------------------------------------*/
getOTP(){
  this.phoneNumber = this.countryCode+this.phoneNumber;
   localStorage.setItem('phoneNo',this.phoneNumber)
    this.phoneNumber = '+'+this.phoneNumber;
    console.log("phoneNumber"+this.phoneNumber);
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.signInWithPhoneNumber(this.phoneNumber,this.reCaptchaVerifier)
        .then((confirmationResult) => {
         // window.confirmationResult = confirmationResult;
          console.log(confirmationResult);
          resolve("confirmation result"+confirmationResult);
          localStorage.setItem('confirmationResult',JSON.stringify(confirmationResult));
          this.dataService.setConfirmationResult(confirmationResult);
          this.router.navigate(['/authentication/otp'],{ state: { currentPage:'signin' } })
        }).catch((error) => {
          console.log(error);
          reject('SMS not sent');
        });
    });
  }
}
