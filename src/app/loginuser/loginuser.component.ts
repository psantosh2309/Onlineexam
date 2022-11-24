import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
  loginUserForm:FormGroup | any;
  submitted = false;
  data:any;

  show_button: Boolean = false;
  show_eye: Boolean = false;
  constructor(private rest:RestService,private Formbuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.loginUserForm = this.Formbuilder.group({
      username :  ['',[Validators.required,Validators.minLength(4)]],
      emailId :    ['',[Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
      ),Validators.minLength(8)]],
      acceptTerms: [false, Validators.requiredTrue]
      })
  }

  loginUser(){
    this.submitted = true;
    this.rest.UserLogin(this.loginUserForm.value).subscribe(res=>{
    this.data = res;
    //this.ToastService.success({detail:"Success Message",summary:"Registration Successfully Created",duration:5000})
    alert("Success");
    this.loginUserForm.reset();
     sessionStorage.setItem('loggedUser', this.data.username);
     sessionStorage.setItem('UserMail', this.data.emailId);
    this.router.navigate(['dashboard'])
   })
  }

  redirectregister(){
    this.router.navigate(['register'])
    }
  
    showPassword() {
      this.show_button = !this.show_button;
      this.show_eye = !this.show_eye;
    }
}


