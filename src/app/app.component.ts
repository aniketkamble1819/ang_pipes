import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang_pipes';

  today = new Date;
  Fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"]; 
  car = {name: "aniket",lastname: "kamble", mobi_no: "2345153"}
}
