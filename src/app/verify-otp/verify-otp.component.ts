import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {
  form!:FormGroup;
  constructor(private activateRoute:ActivatedRoute,private fb:FormBuilder,private signupService:SignupService) { }

  ngOnInit(): void {
   this.form =  this.fb.group({
      email:["",Validators.required],
      otp:["",Validators.required]
    })
    this.activateRoute.queryParams.subscribe((params:any)=>{
        this.form.patchValue(params);
    })
  }

  verify(){
    if(!this.form.valid) return;
    this.signupService.verify(this.form.value).subscribe(data=>{
      alert("You have been verified!");
    },error=>{
      alert(error.error.error);
    });
  }

}
