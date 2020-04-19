import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `
  <input [(ngModel)]="name" type="text">
  {{name}}
  `,
  styles: []
})
export class Test1Component implements OnInit {

  public name ="";
  constructor() { }

  ngOnInit(): void {
  }

}
