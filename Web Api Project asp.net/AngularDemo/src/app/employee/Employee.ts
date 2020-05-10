export class Employee{
    empId: number;
    empName: string;
    deptName: string;

    constructor(empId: number, empName: string, deptName: string){
        this.empId = empId;
        this.empName = empName;
        this.deptName = deptName;
    }
}