import { Component, OnInit } from '@angular/core';
import { FullSectionPost } from '../shared/section-post.model';
import { SectionsService } from '../shared/sections.service';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.scss']
})
export class PoliticsComponent implements OnInit {
  section_name: string = 'POLITICS'
  constructor() { }

  ngOnInit(): void {
  }

}
