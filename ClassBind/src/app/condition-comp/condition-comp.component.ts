import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition-comp',
  template: `<div [ngSwitch]="color">
               <div *ngSwitchCase="'red'">red is picked</div>
               <div *ngSwitchCase="'blue'">blue is picked</div>
               <div *ngSwitchCase="'pink'">pink is picked</div>
               <div *ngSwitchDefault>Default</div>
  </div>`,
  styles : []
})
export class ConditionCompComponent implements OnInit {

  public color = "red";
  constructor() { }

  ngOnInit(): void {
  }

}
