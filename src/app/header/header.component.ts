import { Component, OnInit } from '@angular/core';
// import { NotificationService } from '@progress/kendo-angular-notification';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  condition:any = false;
  username:any;
  constructor() { }

  ngOnInit(): void {
    this.username =  localStorage.getItem("GetUserName");
  }

  Logout(){
    // this.Router.navigate(['/'])
  }
  // show(){
  //  this.condition = true;
  // }
  // public showSuccess(): void {
  //   this.notification.show({
  //     content: "Success notification",
  //     hideAfter: 600,
  //     position: { horizontal: "center", vertical: "top" },
  //     animation: { type: "fade", duration: 400 },
  //     type: { style: "success", icon: true },
  //   });
  // }
//   public show(): void {
//     this.notification.show({
//     content: 'Your data has been saved. Time for tea!'
//     });
// }

}
