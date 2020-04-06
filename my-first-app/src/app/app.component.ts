import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  myfun(){
    var num1 = ((document.getElementById("placeId") as HTMLInputElement).value);
    console.log(num1);
  }
}

