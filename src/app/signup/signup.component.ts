import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form!:FormGroup;
  constructor(private fb:FormBuilder,private signupService:SignupService,private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      userName:["veeskhith",Validators.required],
      email:["veekshithrai94@gmail.com",Validators.required],
      password:["Vikky@1998",Validators.required],
      birthYear:["1994",Validators.required],
      phoneNumber:["7899471666",Validators.required],
    })
  }

  signup(){
    console.log(this.form.value);
    if(!this.form.valid){
      return;
    }

    this.signupService.signup(this.form.value).subscribe(data=>{
      console.log("Signup successful");
      // alert("signed up successfuly")
      this.router.navigate(['verifyOtp'],{
        queryParams:{email:this.form.value.email}
      });
    },err=>{
      console.log(err);
      alert(err.error.error)
    })

  }

}
