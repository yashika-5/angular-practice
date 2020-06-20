export class Employee{
    empId: number;
    empName: string;
    deptName: string;
    img : string;

    constructor(empId: number, empName: string, deptName: string, img: string){
        this.empId = empId;
        this.empName = empName;
        this.deptName = deptName;
        this.img = img;
        
    }
}