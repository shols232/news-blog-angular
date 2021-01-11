import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FullSectionPost } from '../shared/section-post.model';
import { SectionsService } from '../shared/sections.service';
import { PreviewPost } from './preview-post.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  latest_post: FullSectionPost;
  headlines: FullSectionPost[] = [];
  getPostsSub: Subscription;
  entertainment_latest: FullSectionPost[] = [];
  business_latest: FullSectionPost[] = [];
  politics_latest: FullSectionPost[] = [];
  humanity_latest: FullSectionPost[] = [];

  constructor(private sectionsService: SectionsService) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts(){
    this.getPostsSub = this.sectionsService.getHomePosts().subscribe(data => {
      if(data.latest){
        this.latest_post = data.latest
      }else{
        this.latest_post = null
      }
      this.entertainment_latest = data.entertainment
      this.business_latest = data.business
      this.politics_latest = data.politics
      this.humanity_latest = data.humanity
      this.headlines = data.headlines
    })
  }

  ngOnDestroy(){
    this.getPostsSub.unsubscribe()
  }

}
