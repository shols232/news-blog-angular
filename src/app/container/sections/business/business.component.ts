import { Component, OnInit } from '@angular/core';
import { FullSectionPost } from '../shared/section-post.model';
import { SectionsService } from '../shared/sections.service'

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  section_name: string = 'BUSINESS'
  constructor() { }

  ngOnInit(): void {
  }

}
