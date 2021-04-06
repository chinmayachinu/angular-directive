import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentStyles={
    'background-color' : 'red' ,
    'color' : 'green' 
  }

  val:string =''

  listOfPlayer:string[] =['Chinmaya', 'Pinku', 'Abhisek'];

  day:string=""
}
