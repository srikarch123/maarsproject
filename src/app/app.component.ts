import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // This should be an array
})
export class AppComponent implements OnInit {
  theme: string = 'corporate'; // Default theme

  constructor() { }

  ngOnInit(): void {
    // Any initialization you need when the component is created
  }

}
