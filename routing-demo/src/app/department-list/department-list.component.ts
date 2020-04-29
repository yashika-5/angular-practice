import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <h1>Click on any Department name</h1>
    <ul>
       <li (click)="onSelect(department)" *ngFor="let department of departments">
         <span>{{department.id}}</span><a> {{department.name}}</a>
        </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  departments = [
    { "id":1 , "name":"Angular"},
    { "id":2 , "name":"Node"},
    { "id":3 , "name":"MongoDb"},
    { "id":4 , "name":"Ruby"}
  ]
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  onSelect(department){
    this.route.navigate(['/departments',department.id]);
  }
}
