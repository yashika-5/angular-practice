import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isempty : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  profileForm= new FormGroup({
    userName: new FormControl('',[Validators.required,Validators.minLength(2),
    Validators.maxLength(30)]),
    password: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9]+$')])
  }
  );
onSubmit(){
 this.isempty = true;
  console.log(this.profileForm.value);
  console.log(this.profileForm.status)
  alert("User login Confirmed")
  this.profileForm.reset();

}

}
