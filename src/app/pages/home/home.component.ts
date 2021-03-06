import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  role: string;

  constructor() { 
    this.role = sessionStorage.getItem('role');

    if(this.role == undefined) {
      location.href = "/";
    }

  }

  ngOnInit(): void {
  }

}
