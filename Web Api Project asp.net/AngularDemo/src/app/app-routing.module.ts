import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: "home" , component: HomeComponent},
  { path: "employee" , component: EmployeeComponent},
  { path: "department" , component: DepartmentComponent},
  { path: "login" , component: LoginComponent},
  { path: "" , redirectTo: "/login" , pathMatch: "full"},
  { path: "**" , component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
