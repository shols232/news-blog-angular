import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-romance',
  templateUrl: './romance.component.html',
  styleUrls: ['./romance.component.scss']
})
export class RomanceComponent implements OnInit {
  section_name: string = 'ROMANCE'
  constructor() { }

  ngOnInit(): void {
  }

}

