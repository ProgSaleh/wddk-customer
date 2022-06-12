import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found-page',
  templateUrl: './page-not-found-page.component.html',
  styleUrls: ['./page-not-found-page.component.css'],
})
export class PageNotFoundPageComponent implements OnInit {
  cleanUrl: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
