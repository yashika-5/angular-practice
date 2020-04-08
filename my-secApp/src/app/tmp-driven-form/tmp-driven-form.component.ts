import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tmp-driven-form',
  templateUrl: './tmp-driven-form.component.html',
  styleUrls: ['./tmp-driven-form.component.css']
})
export class TmpDrivenFormComponent implements OnInit {
  constructor() { }

  firstName;
  lastName;
  f;
  formSubmitted = false;
  marked : boolean;
  count = 0;
  myOptions = [
    { id:1 , name: "Yashika"},
    { id:2 , name: "Prasang"}
  ];
  myOptions1 = [
    { id:1 , name: "Male"},
    { id:2 , name: "Female"}
  ];

  ngOnInit(): void {
  }
  counter() {
    this.count++;
  }
  doSomething(fName){
      this.firstName = fName.value;
      console.log(fName.value);
  }
  doAnotherthing(lName){
    this.lastName = lName.value;
    console.log(lName.value);
  }
  submit(fun){
    this.formSubmitted = true;
  }

}
