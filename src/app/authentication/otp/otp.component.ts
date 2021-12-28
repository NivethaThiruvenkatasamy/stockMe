import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { doc, setDoc } from "firebase/firestore"; 
import { threadId } from 'worker_threads';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {
  //public previousPage="signin";
 public previousPage = this.router.getCurrentNavigation().extras.state.currentPage?this.router.getCurrentNavigation().extras.state.currentPage:'';
  //public confirmationResult=this.router.getCurrentNavigation().extras.state.confirmationResult;
  otp:any;
  confirmationResult: any;
  @ViewChild('ngOtpInput', { static: false}) ngOtpInput: any;
  config = {
    allowNumbersOnly: false,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '50px',
      'height': '50px'
    }
  };

  
  constructor(private router: Router,private dataService: DataService,private fireauth:AngularFireAuth) { }

  ngOnInit() {  
     this.confirmationResult=this.dataService.getConfirmationResult();
  }
  onOtpChange(otp) {
    this.otp = otp;
   
    
  }
  submit(type:String){
    console.log("inside submit")
    this.enterVerificationCode(type);
    console.log(type);

  }
  async enterVerificationCode(type) {
    console.log(this.otp);
    return new Promise<any>((resolve, reject) => {
     this.confirmationResult.confirm(this.otp).then(async (result) => {
        const user = result.user;
        resolve(user);
        console.log(JSON.stringify(user));
        localStorage.setItem("userId",user.phoneNumber.slice(1));
        switch(type){
          case 'signin':
            this.router.navigateByUrl('/main-content/dashboard');
            break;
          case 'signup':
            this.dataService.setDocument();
            this.router.navigateByUrl('/main-content/search-profile');
            // Add a new document in collection "cities"
            
             break;
        }
      }).catch((error) => {
        reject(error.message);
        //alert("Invalid OTP! Please try again!");
      });
    });
  }

}
