import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpclient:HttpClient) { }

  private baseurl = "http://localhost:8080/api/v1/Users";
  private loginbaseurl = "http://localhost:8080/api/v1/Logins";


  CreateUser(data:any)
  {
  console.log(data);
  return this.httpclient.post<any>(`${this.baseurl}`,data);
  }

  GetUser(getdata:any)
  {

    console.log(getdata);
 
  return this.httpclient.post<any>(`${this.loginbaseurl}`,getdata);
  }

}
