import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myRouter:Router,private myapi:ApiService) { }

  email=""
  password=""

  adminLogin=()=>{

   
    if (this.email=="admin" && this.password=="admin"){
     alert ("Login Successful")
     this.myRouter.navigate(["/addemployee"])
    }else{
    alert("Invalid Credentials")
  }
    
   }

   employLogin=()=>{
    let data={
      "email":this.email,
      "password":this.password
    }
    console.log(data)
    this.myapi.signInEmployee(data).subscribe(
      (res:any)=>{
        if (res.length>0) {
          
          localStorage.setItem("id",res[0].id)
          this.myRouter.navigate(["/employdasboard"])
          alert("Login Success")
        } else {
          alert("Invalid Credentials")
        }
      }
    )
    this.email=""
    this.password=""
  }
  securityLogin=()=>{
    let data={
      "email":this.email,
      "password":this.password
    }
    console.log(data)
    this.myapi.signInSecurity(data).subscribe(
      (res:any)=>{
        if (res.length>0) {
          
          localStorage.setItem("id",res[0].id)
          this.myRouter.navigate(["/securitydashboard"])
          alert("Login Success")
        } else {
          alert("Invalid Credentials")
        }
      }
    )
    this.email=""
    this.password=""
  }

   

  

  ngOnInit(): void {
  }

}
