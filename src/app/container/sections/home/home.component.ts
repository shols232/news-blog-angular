import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
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
  @ViewChild('ad') ad: ElementRef
  // constructor(private sectionsService: SectionsService) { }

  // ngOnInit(): void {
  //   this.getPosts()
  // }

  constructor(
    private sectionsService: SectionsService,
    private _renderer2: Renderer2,
) { }

  ngOnInit() {
    this.getPosts()
    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.text = `
    atOptions = {
      'key' : '11c5f233a048f7ae616cecaa2548fe24',
      'format' : 'iframe',
      'height' : 250,
      'width' : 300,
      'params' : {}
    };
    document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.gatetodisplaycontent.com/11c5f233a048f7ae616cecaa2548fe24/invoke.js"></scr' + 'ipt>');
    `;

    this._renderer2.appendChild(this.ad, script);
}

  getPosts(){
    this.getPostsSub = this.sectionsService.getHomePosts().subscribe(data => {
      if(data.latest.slug){
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
