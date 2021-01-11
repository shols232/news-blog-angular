import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fashion',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {
  section_name: string = 'SPORTS'
  constructor() { }

  ngOnInit(): void {
  }

}
