import { Component, OnInit } from '@angular/core';
import { FullSectionPost } from '../shared/section-post.model';
import { SectionsService } from '../shared/sections.service';

@Component({
  selector: 'app-wildlife',
  templateUrl: './personal-stories.component.html',
  styleUrls: ['./personal-stories.component.scss']
})
export class PersonalStoriesComponent implements OnInit {
  section_name: string = 'PERSONAL'
  constructor() { }

  ngOnInit(): void {
  }

}
