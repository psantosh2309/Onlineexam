import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
// import { SharedService } from '../shared.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm : FormGroup | any;
loginres:any;
submitted = false;
// username:any;
constructor(private router:Router,private rest:RestService,private Formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.Formbuilder.group({
      username :  ['',[Validators.required,Validators.minLength(4)]],
      emailId :    ['',[Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
      ),Validators.minLength(8)]],
      acceptTerms: [false, Validators.requiredTrue]
      })
      
  }
  //new
  Login(){
    this.submitted = true;
    this.rest.LoggedUser(this.loginForm.value).subscribe(resultdat=>{
    this.loginres = resultdat;
    //this.ToastService.success({detail:"Success Message",summary:"Registration Successfully Created",duration:5000})
    alert("Success");
    this.loginForm.reset();
     sessionStorage.setItem('loggedUser', this.loginres.username);
     sessionStorage.setItem('UserMail', this.loginres.emailId);
    this.router.navigate(['dashboard'])
   })
  }


  // Login(){
  //   this.submitted = true;
  //   this.rest.LoggedUser(this.loginForm.value.username,this.loginForm.value.emailId,this.loginForm.value.password).subscribe(resultdat=>{
  //     this.loginres = resultdat;
  //     console.log(this.loginres);
  //     if(this.loginres.length>0){
  //       alert("Login Success");
  //       this.loginForm.reset();
  //       this.router.navigate(['dashboard'])
  //       sessionStorage.setItem('loggedUser', this.loginres.username);
  //       sessionStorage.setItem('UserMail', this.loginres.emailId);
  //      }else{
  //        alert('User Not Found!');
  //      }
  //    })
  //     //this.ToastService.success({detail:"Success Message",summary:"Registration Successfully Created",duration:5000})
  // }

  redirectregister(){
  this.router.navigate(['register'])
  }

}
