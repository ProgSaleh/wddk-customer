import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  searchLocation: string = '';
  searchRestaurantName: string = '';
  searchDate: Date = new Date();
  searchNoOfPeople: number = 1; // people is at least 1.

  constructor() {}

  ngOnInit(): void {}

  date(event: any) {
    console.log(event.target.value);
  }
}
