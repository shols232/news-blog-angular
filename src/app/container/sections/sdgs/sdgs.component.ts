import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sdgs',
  templateUrl: './sdgs.component.html',
  styleUrls: ['./sdgs.component.scss']
})
export class SDGsComponent implements OnInit {
  section_name: string = 'SDGs'
  constructor() { }

  ngOnInit(): void {
  }

}
