import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
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
  crime_latest: FullSectionPost[] = [];
  politics_latest: FullSectionPost[] = [];
  romance_latest: FullSectionPost[] = [];
  // constructor(private sectionsService: SectionsService) { }

  // ngOnInit(): void {
  //   this.getPosts()
  // }

  constructor(
    private sectionsService: SectionsService,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
) { }

  ngOnInit() {
    this.getPosts()
}

  // ngAfterViewInit(): void {
  //   //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //   //Add 'implements AfterViewInit' to the class.
  //   let adscript = this._document.getElementById('adscritptcont')
  //   if (adscript){
  //     return;
  //   }
  //   let script = this._renderer2.createElement('script');
  //   script.type = `text/javascript`;
  //   script.src = 'assets/ads.js';
  //   console.log('ayemaleeeee')
  //   let adcont = this._renderer2.createElement('div');
  //   adcont.setAttribute("id", 'adscritptcont')
  //   this._renderer2.appendChild(adcont, script)
  //   // this._renderer2.appendChild(this.ad, script);
  //   this._renderer2.appendChild(this._document.body, adcont);
  // }

  getPosts(){
    this.getPostsSub = this.sectionsService.getHomePosts().subscribe(data => {
      if(data.latest.slug){
        this.latest_post = data.latest
      }else{
        this.latest_post = null
      }
      console.log(data)
      this.entertainment_latest = data.entertainment
      this.crime_latest = data.crime
      this.politics_latest = data.politics
      this.romance_latest = data.romance
      this.headlines = data.headlines
    })
  }

  ngOnDestroy(){
    this.getPostsSub.unsubscribe()
  }

}
