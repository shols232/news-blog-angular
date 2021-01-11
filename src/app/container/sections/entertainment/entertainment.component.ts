import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent implements OnInit {
  section_name: string = 'ENTERTAINMENT'
  constructor() { }

  ngOnInit(): void {
  }

}
