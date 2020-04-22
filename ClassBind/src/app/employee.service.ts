import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return  [
      { "id":1, "name":"Yashika", "age": 19 },
      { "id":2, "name":"Yash", "age": 39 },
      { "id":3, "name":"Yashi", "age": 29 }  
    ];
  }
}
