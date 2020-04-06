import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myfun(){
    var num1 = (document.getElementById("placeId").innerHTML);
    console.log(num1);
  }
}
