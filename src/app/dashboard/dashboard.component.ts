import { Component, OnInit } from '@angular/core';
// import { NotificationService } from '@progress/kendo-angular-notification';
import Swal from 'sweetalert2';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  cardData : any;

  
  username:any;
  emailId:any;
  constructor(private rest:RestService) { }
  
  ngOnInit(): void {
    this.rest.getData().subscribe(
      data =>{
        this.cardData = data;
        console.log(this.cardData)
      }
    );
    this.username = sessionStorage.getItem('loggedUser');
    this.emailId = sessionStorage.getItem('UserMail');
  }

  //Posting Single Candidate Data to Database
    onApply(card:any){
    console.log(card);
    card.EmailID = this.emailId;
    card.username = this.username;
    this.rest.postData(card).subscribe(response =>{
      console.log('response');
    })
    Swal.fire("Applied Successfully");
  }

  // public show(): void {
  //   this.notification.show({
  //     content: "Success notification",
  //     hideAfter: 600,
  //     position: { horizontal: "center", vertical: "top" },
  //     animation: { type: "fade", duration: 400 },
  //     type: { style: "success", icon: true },
  //   });
  // }
  
  

}




















// saveUser() {
//   this.user = this.addUserForm.value;
//   this.userService.saveUser(this.user).subscribe((response: any) => {
//     console.log(response);

//     this.users.push({ name: response.name, job: response.job });
//   });
// }