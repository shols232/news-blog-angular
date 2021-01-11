import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  section_name: string = 'TECHNOLOGY'
  constructor() { }

  ngOnInit(): void {
  }

}
