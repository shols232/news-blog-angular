import { Component, OnInit } from '@angular/core';
import { FullSectionPost } from '../shared/section-post.model';
import { SectionsService } from '../shared/sections.service';

@Component({
  selector: 'app-features',
  templateUrl: './research-articles.component.html',
  styleUrls: ['./research-articles.component.scss']
})
export class ResearchArticles implements OnInit {
  section_name: string = 'RESEARCH'
  constructor() { }

  ngOnInit(): void {
  }

}
