import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  signup(userDetails:any){
    return this.http.post('http://localhost:5000/auth/signup',userDetails);//This is where the API integration is done
  }

  verify(userDetails:any){
    return this.http.post('http://localhost:5000/auth/verifyOtp',userDetails);
  }
}
