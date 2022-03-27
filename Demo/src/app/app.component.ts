import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';

  data=[
    {
      name:'Krishna',
      age:20
    },
    {
      name:'Shiv',
      age:18
    },
    {
      name:'Ram',
      age:20
    },
    {
      name:'Dev',
      age:18
    }
  ]
  item={
    name:'Krishna',
    age:20
  }
}
