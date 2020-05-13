import { Component, OnInit ,Input} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { EmployeeComponent } from '../employee/employee.component';
import { WebApiFetchService } from '../web-api-fetch.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uaForm: FormGroup;
  submitted : boolean = false;

  isUserLoggedIn: boolean;
  constructor(private router :Router, private api :WebApiFetchService) { }

  ngOnInit(): void {
    if(this.api.isLoggedIn){
      if(this.api.isAdmin)
      this.router.navigate(['./employee'])
      else {
        this.router.navigate(['./home'])
      }
    }
   
    this.initialise();   
  }
  initialise(){
  this.uaForm = new FormGroup({
    UserName: new FormControl(null, [Validators.required]),
    Password: new FormControl(null, [Validators.required])
  });
}
 
      onSubmit(){
          if(this.uaForm.valid == true){
            if(this.uaForm.value.UserName == "admin" && this.uaForm.value.Password == "admin123")
            {            
            this.api.isAdmin  = true;
            this.api.isLoggedIn = true;
            this.submitted = true;
            console.log(this.uaForm);
            this.router.navigate(['./employee'])
           }
           else{
             this.api.isLoggedIn = true;
             this.submitted = true;
             this.router.navigate(['./home']);
             console.log(this.uaForm);
           }
        }
          else{
            this.submitted= false;
            console.log("Error");
          }
      }

}
