import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crime',
  templateUrl: './crime.component.html',
  styleUrls: ['./crime.component.scss']
})
export class CrimeComponent implements OnInit {
  section_name: string = 'CRIME'
  constructor() { }

  ngOnInit(): void {
  }

}
