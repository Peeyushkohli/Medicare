import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
user: User = new User

  submitted:boolean=false;
  formValue! :FormGroup;
  registerForm!:FormGroup

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(private builder:FormBuilder, private _http: HttpClient,private router:Router,private service:UserService) { }
   

  ngOnInit(): void {
  



    this.registerForm= this.builder.group({

      userName :[' '],
      userFirstName:[' '],
      userLastName:[' '],
      userPassword:['']
      
    })
  }
  get form() {
    return this.formValue.controls;
  }
    onSubmit()
    {
      this.submitted=true
      
      
        this.service.addUser(this.user).subscribe(x=>console.log(x));
        window.alert("User added sucessfully")

        this.registerForm.reset();
      this.router.navigate(['/login'])
      }


      signUp(){

        this._http.post<any>("http://localhost:8083/registerNewUser",this.registerForm.value, {
          headers: this.requestHeader,
        }).subscribe(res=>{
          alert("User Registered !");
          this.registerForm.reset();
          this.router.navigate(['/login'])
      },
      err=>{
        alert("Registration Failed!")
      })
        }
      }

    

   
  
  
  
                   