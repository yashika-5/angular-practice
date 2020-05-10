import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Employee } from './employee/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebApiFetchService {

  constructor(private httpClient: HttpClient) {  
   }

   apiPrefix: string = "http://localhost:53838";
   getEmployees(): Observable<Employee[]>{
     return this.httpClient.get<Employee[]>(this.apiPrefix + "/api/employee");
   }

   postEmployees(emp : Employee): Observable<Employee[]>{
    return this.httpClient.post<Employee[]>(this.apiPrefix + "/api/employee",emp);
  }
  deleteEmployees(empid : number){
    return this.httpClient.delete(this.apiPrefix + "/api/employee?empId=" +empid,{responseType : "text"});
  }
}
