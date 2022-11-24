import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RestService } from '../rest.service';
import {  FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admdashboard',
  templateUrl: './admdashboard.component.html',
  styleUrls: ['./admdashboard.component.css']
})
export class AdmdashboardComponent implements OnInit {
 
   cardData: any;

   
   username:any;
   SkillTestForm:any;
   FormBuilder: any;
   skillres:any;
   getskillset:any;
   getskilllang:any;
   Data:any = [
     { name: '0-3 Experience', value: '0-3 Experience' },
    { name: '3-6 Experience', value: '3-6 Experience' },
    { name: 'More than 6 Experience', value: 'More than 6 Experience' },
   ];

  constructor(private rest:RestService, private router:Router) { }

  ngOnInit(): void {
    this.SkillTestForm = this.FormBuilder.group({
           skillTest :           new FormControl('',[Validators.required]),
           experience:        new FormControl('',[Validators.required]),
           enddate:            new FormControl('')

    // this.ngOnChanges();
    // console.log('ngOnInit Method');
  });
  }
  ngOnChanges() {
    this.rest.getUserData().subscribe(
      data =>{
        this.cardData = data;
        console.log(this.cardData)
        console.log('ng onchanges method');
      }
    )
    if(this.cardData==true){
      this.chartMethod()
    }
  }

  chartMethod(){
  }
  SaveSkillTest(){

  }

  closeModal(){

  }
  // SaveSkillTest(){
 // console.log(this.SkillTestForm.value);
  
  // this.service.SaveSkillTest(this.SkillTestForm.value).subscribe(resultdat=>{
 
  // if(resultdat)
  // {
    
  //   this.skillres = resultdat;
  //  this.SkillTestForm.reset();
  //   this.ToastService.success({detail:"Success Message",summary:"SkillTest Saved Successfully",duration:5000})
  
  //  this.router.navigate(['Assessment'])
  //  setTimeout(()=>{                           //<<<---using ()=> syntax
//     window.location.reload();
// }, 3000);
   //window.location.reload();

    
//   }
//   else{
//     this.ToastService.error({detail:"Error Message",summary:"SkillTest not  Saved Successfully",duration:5000})
   
//   }
 

// });


}
   


























// import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { SharedService } from '../shared.service';
// import { NgToastService } from 'ng-angular-popup';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {
//   username:any;
//   SkillTestForm : FormGroup | any;
//   skillres:any;
//   getskillset:any;
//   getskilllang:any;
//   Data:any = [
//     { name: '0-3 Experience', value: '0-3 Experience' },
//     { name: '3-6 Experience', value: '3-6 Experience' },
//     { name: 'More than 6 Experience', value: 'More than 6 Experience' },
    
//   ];



  // @ViewChild('myModalClose') modalClose:any;
  //@ViewChild('exampleModal', { static: true }) exampleModal: DashboardComponent | any;



  // @ViewChild('exampleModal') exampleModal: ElementRef | any;
  
  // public modalRef: any;

  // constructor(private FormBuilder:FormBuilder,private service:SharedService,private ToastService:NgToastService,private router:Router) { }

  // ngOnInit(): void {
  //   this.SkillTestForm = this.FormBuilder.group({
  //     skillTest :           new FormControl('',[Validators.required]),
  //     experience:        new FormControl('',[Validators.required]),
  //     enddate:            new FormControl('')
      // Experience1:        new FormControl(''),
      // Experience2:        new FormControl(''),
     
   
    // });

    // this.service.GetSkilllang().subscribe(res=>{
    //     this.getskilllang = res;
       // console.log(this.getskilllang);
  

// });
//  }

// SaveSkillTest(){
 // console.log(this.SkillTestForm.value);
  
  // this.service.SaveSkillTest(this.SkillTestForm.value).subscribe(resultdat=>{
 
  // if(resultdat)
  // {
    
  //   this.skillres = resultdat;
  //  this.SkillTestForm.reset();
  //   this.ToastService.success({detail:"Success Message",summary:"SkillTest Saved Successfully",duration:5000})
  
  //  this.router.navigate(['Assessment'])
  //  setTimeout(()=>{                           //<<<---using ()=> syntax
//     window.location.reload();
// }, 3000);
   //window.location.reload();

    
//   }
//   else{
//     this.ToastService.error({detail:"Error Message",summary:"SkillTest not  Saved Successfully",duration:5000})
   
//   }
 

// });


// }


// closeModal(){
//   this.SkillTestForm.reset();
// }
