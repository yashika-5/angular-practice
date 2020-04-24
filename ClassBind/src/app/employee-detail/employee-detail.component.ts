import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-employee-detail',
  template: `<h2>{{errorMsg}}</h2>
            <ul *ngFor="let employee of employees">
              <li>{{employee.name}}</li>
             </ul>`,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];
  public errorMsg;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data,
               error => this.errorMsg = error);
               
  }

}
