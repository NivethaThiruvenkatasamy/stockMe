import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {
  public previousPage="signin";
 // public previousPage = this.router.getCurrentNavigation().extras.state.currentPage?this.router.getCurrentNavigation().extras.state.currentPage:'';
  //public confirmationResult=this.router.getCurrentNavigation().extras.state.confirmationResult;
  otp:any;
  confirmationResult: any;

  
  constructor(private router: Router,private dataService: DataService,private fireauth:AngularFireAuth) { }

  ngOnInit() {  
     this.confirmationResult=this.dataService.getConfirmationResult();
  }

  submit(type:String){
    this.enterVerificationCode();
    console.log(type);
    switch(type){
      case 'signin':
        this.router.navigateByUrl('/main-content/dashboard');
        break;
      case 'signup':
        this.router.navigateByUrl('/main-content/search-profile');
         break;
    }

  }
  async enterVerificationCode() {
    return new Promise<any>((resolve, reject) => {
     this.confirmationResult.confirm(this.otp).then(async (result) => {
        const user = result.user;
        resolve(user);
        console.log(JSON.stringify(user));
        localStorage.setItem("userId",user.phoneNumber.slice(1));
        console.log(user.phoneNumber.slice(1));
      }).catch((error) => {
        reject(error.message);
      });
    });
  }
}
