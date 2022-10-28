import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  signInEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/authEmp",data)
  }

  signInSecurity=(data:any)=>{
    return this.http.post("http://localhost:8080/authSecurity",data)
  }
}
