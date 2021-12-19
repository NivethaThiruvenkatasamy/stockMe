import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {
  public previousPage = this.router.getCurrentNavigation().extras.state.currentPage?this.router.getCurrentNavigation().extras.state.currentPage:'';
  public confirmationResult=this.router.getCurrentNavigation().extras.state.confirmationResult;
  otp:any;
  
  constructor(private router: Router) { }

  ngOnInit() {    
  }

  submit(type:String){
    this.enterVerificationCode();
    
    console.log(type);
    switch(type){
      case 'signin':
        this.router.navigateByUrl('/main-content/search-profile');
        break;
    }

  }
  async enterVerificationCode() {
    return new Promise<any>((resolve, reject) => {
      this.confirmationResult.confirm(this.otp).then(async (result) => {
        console.log("result from otp"+result);
        const user = result.user;
        resolve(user);
      }).catch((error) => {
        reject(error.message);
      });

    });
  }

}
