import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  
   names;
  constructor() { }

  ngOnInit(): void {
   
  }
  myfun(vohElement) {
    if (vohElement.value) {    
      this.names = vohElement.value;
    }
  }
}
