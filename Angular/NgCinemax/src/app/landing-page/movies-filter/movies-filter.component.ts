import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-movies-filter',
  templateUrl: './movies-filter.component.html',
  styleUrls: ['./movies-filter.component.css']
})
export class MoviesFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('select').formSelect();
  }

}
