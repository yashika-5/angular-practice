import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <h1> 
            Hello {{name}}
            </h1>
            <p>
            <input [id]="myId" type="text" value="yourName">
            </p>
            <p>     
            <input [disabled]="isDisabled" id= "{{myId}}" type="text" value="yourName"> 
            </p>
            <p>
            <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="yourName">
            </p>         `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Yashika";
  public myId = "testId";
  public isDisabled = true;
  constructor() { }

  ngOnInit(): void {
  }

 

}
