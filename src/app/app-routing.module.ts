import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';

const routes: Routes = [
{
path:'signup',
component:SignupComponent,
},
{
  path:'verifyOtp',
  component:VerifyOtpComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
