import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  ItemsArray: any[] = [];
  deletedData :any;
  data:any;
  constructor(private rest:RestService) { }

  ngOnInit(): void {
    this.rest.getUserData().subscribe(
      data =>{
        this.ItemsArray = data;
      }
    );
    
  }
  
  deleteItem(data:any) {
    confirm('Are you sure to delete this data')
    this.rest.deleteUser(data).subscribe(
      res =>{
        this.deletedData = res;
        this.ngOnInit();
      }
       );
    }
   

  }

