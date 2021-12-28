import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthenticationPageRoutingModule } from './authentication-routing.module';

import { AuthenticationPage } from './authentication.page';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OtpComponent } from './otp/otp.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgOtpInputModule } from 'ng-otp-input';
import {Ng2TelInputModule} from 'ng2-tel-input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthenticationPageRoutingModule,
    NgOtpInputModule,
    Ng2TelInputModule

  ],
  declarations: [AuthenticationPage,LoginComponent,SignupComponent,OtpComponent]
})
export class AuthenticationPageModule {}
