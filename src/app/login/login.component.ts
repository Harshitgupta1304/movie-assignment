import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  token!: string;
  constructor(
    private formbuilder : FormBuilder,
    private router : Router,
    public authservice:AuthserviceService
    ) { }
  
  ngOnInit() {
    this.loginForm = this.formbuilder.group({
     email: ["", Validators.required],
     password : ["", Validators.required]
   })
 }
 onLogin(email: any,password: any){
   let result = this.authservice.onSignIn(email,password)
   
   
   this.router.navigate(['/dashboard']);
   
   
  
  }
  onRefresh(){
    window.location.reload();
    }
  
 }

