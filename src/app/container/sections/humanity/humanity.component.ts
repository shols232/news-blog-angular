import { Component, OnInit } from '@angular/core';
import { FullSectionPost } from '../shared/section-post.model';
import { SectionsService } from '../shared/sections.service';

@Component({
  selector: 'app-humanity',
  templateUrl: './humanity.component.html',
  styleUrls: ['./humanity.component.scss']
})
export class HumanityComponent implements OnInit {
  section_name: string = 'HUMANITY'
  constructor() { }

  ngOnInit(): void {
  }

}
