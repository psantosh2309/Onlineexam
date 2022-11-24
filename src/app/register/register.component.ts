import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
// import { SharedService } from '../shared.service';
import { MustMatch } from '../_helpers/must-match.validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm : FormGroup | any;
  data:any;
  submitted = false;
  constructor(private router:Router,private Formbuilder:FormBuilder,private rest:RestService) { }

  ngOnInit(): void {
    this.RegisterForm = this.Formbuilder.group({
      username :      ['',[Validators.required,Validators.minLength(4)]],
      emailId :    ['',[Validators.required,Validators.minLength(4)]],    
      password: ['', [Validators.required, Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
      ),Validators.minLength(8)]],    
      confirm_Password :['',[Validators.required]],
      acceptTerms: [false, Validators.requiredTrue]
  }
  ,{
    validator: MustMatch('password', 'confirm_Password')
}
)
  }

  CreateUser(){
    this.submitted = true;
    this.rest.SignupUser(this.RegisterForm.value).subscribe(resultdat=>{
    this.data = resultdat;
    //this.ToastService.success({detail:"Success Message",summary:"Registration Successfully Created",duration:5000})
    alert("Success");
    this.RegisterForm.reset();
    this.router.navigate(['login'])
   })
  }

  RedirectLogin(){
    
    this.router.navigate(['/'])
    
    }

}
// function MustMatch(arg0: string, arg1: string): any {
//   throw new Error('Function not implemented.');
// }

