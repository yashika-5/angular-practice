import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';


const routes: Routes = [
  { path: "home" , component: HomeComponent},
  { path: "employee" , component: EmployeeComponent},
  { path: "department" , component: DepartmentComponent},
  { path: "" , redirectTo: "/home" , pathMatch: "full"},
  { path: "**" , component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
