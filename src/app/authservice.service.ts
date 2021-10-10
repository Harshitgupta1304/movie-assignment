import { JwtHelperService } from '@auth0/angular-jwt';

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
currentUser:any;
token:any;
isError:any;
isloading:any;
  constructor(
    private  http: HttpClient
  ) { 
    let token = localStorage.getItem('token');
    if (token) {
      let jwt = new JwtHelperService;
      this.currentUser = jwt.decodeToken(token);
      this.token = token;
    }
  }

  onSignIn(email: any,password: any){
    //const {email} =this.loginForm.value;
    //const {password} =this.loginForm.value;
     let token! :string;
     
    const checkURL = new URL(`https://demo.credy.in/api/v1/usermodule/login/`);
      var reqHeader = new HttpHeaders({'Content-Type':'application/json'})
     this.http.post(checkURL.href,{
        username:email,
        password:password
    }, {headers: reqHeader}).subscribe(
      (response:any)=>{
        this.isError=false;
        this.isloading=false;
        console.log(response)
        token = response.data.token
        console.log(token)
        if(token){
        localStorage.setItem('token', token);
        
      }}
    )
    return token;
   }

   logout() { 
    localStorage.removeItem('token');
    this.currentUser = null;
   }

   dashObj=[]
   dashObj2=[]
}
