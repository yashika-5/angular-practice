import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl ,ReactiveFormsModule } from '@angular/forms';
import { Employee } from './Employee';
import { WebApiFetchService } from '../web-api-fetch.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  //create property for reactive form
  newForm;
  employees: Employee[];
  constructor(private empService: WebApiFetchService) {
      this.employees = [];
   }
 id : number;
  ngOnInit(): void {
    this.initialseForm();
    this.getEmployees();
     this.id = this.newForm.value.EmpId;
  }

  initialseForm(){
    this.newForm = new FormGroup({
        EmpId : new FormControl(),
        EmpName : new FormControl(),
        DeptName : new FormControl(),

    });  
  }

  getEmployees(){
    this.empService.getEmployees()
      .subscribe(employees =>{
        employees.forEach(employee => {
        this.employees.push(employee);
      });
    }); 
  }    
  onAddClick(){
    if(this.newForm.valid == true){

      // create emp object from the value of form
      console.log(this.newForm.value.EmpId);
      var emp = new Employee(this.newForm.value.EmpId,this.newForm.value.EmpName,this.newForm.value.DeptName);
      this.empService.postEmployees(emp).subscribe(
      (response) => {
        console.log(response);
        this.employees.push(emp);
      }
      )
      this.newForm.reset();
    }
  }
  onRemoveClick(){
    if(confirm("Do you want to delete it ?") == true){
    this.id = this.newForm.value.EmpId;
    this.empService.deleteEmployees(this.id).subscribe(
      (response) =>{
        console.log("Deleted");
         this.newForm.reset();
         this.empService.getEmployees();
      }
    )
    this.newForm.reset();
  }
}
  

}
