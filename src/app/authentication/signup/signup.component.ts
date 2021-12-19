import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}
  navigate(){
    this.router.navigate(['/authentication/login'],{ state: { currentPage:'signup' } })
  }

  submit(){
    this.router.navigate(['/authentication/otp'],{ state: { currentPage:'signup' } })
  }
}
