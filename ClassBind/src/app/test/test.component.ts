import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h1> Welcome {{name}} </h1>
            <h2 class="text-success"> Hello World </h2>
            <h2 [class]="successClass"> Hello World </h2>
            <h2 [class.text-danger]="hasError"> Hello World </h2>
            <h2 [ngClass] = "messageClasses"> Hello World </h2>

            <h1 [style.color]="hasError ? 'yellow' : 'purple'"> Style Binding </h1>
            <h1 [ngStyle] = "totalStyles"> Style Binding </h1>

           <button (click)="onClick($event)">Event Binding</button>
           {{greet}}

           <input #myInput type="text">
           <button (click)="onMessage(myInput)">Template refernce</button>
  `,
  styles: [`
  .text-success{
    color: green;
  }
  .text-danger{
    color: red;
  }
  .text-special{
    font-style: italic;
  }`]
})
export class TestComponent implements OnInit {

  public name = "Yashika";
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success" : !this.hasError,
    "text.danger" : this.hasError,
    "text-special" : this.isSpecial
  }
  public totalStyles ={
    font : "20px",
    color: "pink"  
  }
  public greet = " " ;
  onClick(event){
    console.log("Welcome to my world")
    this.greet = event.type;
  }
  onMessage(value){
    console.log(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
