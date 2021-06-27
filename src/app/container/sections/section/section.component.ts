import { LowerCasePipe } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { SectionPost, FullSectionPost } from '../shared/section-post.model'
import { SectionsService } from '../shared/sections.service';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, OnDestroy {
  @Input() section_name: string;
  latest_post: FullSectionPost
  current_page_num: number;
  next_page_num: number;
  total_pages: number;
  prev_page_num: number;
  routeSub: Subscription
  posts: FullSectionPost[] = []
  constructor(
    private SectionsService: SectionsService, 
    private router: Router, 
    private route: ActivatedRoute,
    private titleService: Title
    ) { 
      this.titleService.setTitle(this.section_name);
    }

  ngOnInit(): void {
    this.routeSub = this.route.queryParams.subscribe(params => {
      if(params['page']){

        this.getNewPageInfo(params['page'])
      }else{
        this.onLoad()
      }
    })
  }

  assignData(data, page_1=true){
      this.next_page_num = data.next_page_number
      this.prev_page_num = data.prev_page_number
      this.total_pages = data.total_pages
      this.current_page_num = data.current
      if(data.previous == null && page_1 && this.section_name != 'VIDEOS'){
        this.latest_post = data.results.shift()
      }else{
        this.latest_post = null
      }
      this.posts = data.results
  }

  onLoad(){
    this.SectionsService.getSectionPosts(this.section_name).subscribe(data => {
      this.assignData(data)
    }, error => {
      if(error){
        this.redirectTo404()
      }
    })
  }

  toNewPage(page_num: number){
    this.router.navigate(['section', this.section_name.toLowerCase()], {queryParams:{'page':page_num}})
  }

  getNewPageInfo(page_num: number){
    this.SectionsService.toNextPage(page_num, this.section_name).subscribe(data => {
      this.assignData(data)
    }, error => {
      if(error){
        this.redirectTo404()
      }
    })
  }

  redirectTo404(){
    this.router.navigate(['404-error-page'])
  }

  ngOnDestroy(){
    this.routeSub.unsubscribe()
  }
}
