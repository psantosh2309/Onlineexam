import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {
  AdminRegisterForm : FormGroup | any;
  data:any;
  submitted = false;
  constructor(private router:Router,private Formbuilder:FormBuilder,private service:SharedService) { }

  ngOnInit(): void {
    this.AdminRegisterForm = this.Formbuilder.group({
      name :      ['',[Validators.required,Validators.minLength(4)]],
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
    this.service.CreateUser(this.AdminRegisterForm.value).subscribe(resultdat=>{
    this.data = resultdat;
    //this.ToastService.success({detail:"Success Message",summary:"Registration Successfully Created",duration:5000})
    alert("Success");
    this.AdminRegisterForm.reset();
    this.router.navigate(['/'])
   })
    

  }

  RedirectLogin(){
    this.router.navigate(['/'])
    }

}
