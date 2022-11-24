import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  loginForm : FormGroup | any;
  loginres:any;
  submitted = false;
  constructor(private router:Router,private service:SharedService,private Formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.Formbuilder.group({
      name :  ['',[Validators.required,Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
      ),Validators.minLength(8)]]
      })
  }
  Login(){
    this.submitted = true;
    this.service.GetUser(this.loginForm.value).subscribe(resultdat=>{
      this.loginres = resultdat;
      console.log(this.loginres);
      
      //this.ToastService.success({detail:"Success Message",summary:"Registration Successfully Created",duration:5000})
      alert("Success");
 
      this.router.navigate(['admdashboard'])
     })
      

  }

  redirectregister(){
    
  this.router.navigate(['register'])
  
  }

}
