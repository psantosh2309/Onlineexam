import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RestService {
 
  constructor(private http: HttpClient) { }
  
  // Posting Jobs Api Handle by Admin getting data in User Dashboard
  getData():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:3000/posts");
  }
   
  // Posting Jobs by Admin in Admpostjobs component
  postJob(data:any):Observable<any>{
    const url = 'http://localhost:3000/posts';
    return this.http.post<any>(url,data)      
  }
  
  // AppliedUser Data in AdmDashboard
  getUserData():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:3000/carddata");
  }
  
  // Candidate Applied For Job Api
  postData(data:any):Observable<any>{
    const url = 'http://localhost:3000/carddata';
    return this.http.post<any>(url,data)      
  }
  
  
  // LoggedUser(username:any,EmailId:any,Password:any){
  //   return this.http.get<any>("http://localhost:3000/signupData/?username="+username+"&emailId="+EmailId+"&password="+Password);
  // }

  // LoginUser (Optional)
  UserLogin(data:any):Observable<any>{
    const url = 'http://localhost:3000/data';
    return this.http.post<any>(url,data);
  }
  
  // Login
  LoggedUser(data:any):Observable<any>{
    const url = 'http://localhost:3000/loginData';
    return this.http.post<any>(url,data);
  }
  
  // Signup User Api
  SignupUser(data:any):Observable<any>{
    const url = 'http://localhost:3000/signupData';
    return this.http.post<any>(url,data)      
  }

  deleteUser(id:number):Observable<any>{
    const url = 'http://localhost:3000/cardData';
     return this.http.delete<any>(`${url}/${id}`)
  }

  GetSkillTest(){
  }

  SaveSkillTest(){
  }
  
}



















// postData(): Observable<any> {
  //   const url = 'http://localhost:3000/carddata';
  //   const obj = {
  //     title : title,
  //     designation: designation
  //   };
  //   return this.http.post<any>(url, obj);
  // }

  // public saveUser(user: User): Observable<any> {
  //   const url = 'https://reqres.in/api/users';
  //   return this.http.post<any>(url, user);
  // }
  // getComments(id: string): Observable<any> {
  //   const url = `${apiUrl + this.commentsUrl}/${id}`;
  //   return this.http.get(url, httpOptions).pipe(
  //     map(this.extractData),
  //     catchError(this.handleError));
  // }