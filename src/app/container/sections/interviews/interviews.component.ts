import { Component, OnInit } from '@angular/core';
import { FullSectionPost } from '../shared/section-post.model';
import { SectionsService } from '../shared/sections.service';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.scss']
})
export class InterviewsComponent implements OnInit {
  section_name: string = 'INTERVIEWS'
  constructor() { }

  ngOnInit(): void {
  }

}
