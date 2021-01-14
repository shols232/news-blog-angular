import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit, AfterViewInit {

  constructor(private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document) { }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    let adscript = this._document.getElementById('adscritptcont')
    if (adscript){
      return;
    }
    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.src = 'assets/ads.js';
    console.log('ayemaleeeee')
    let adcont = this._renderer2.createElement('div');
    adcont.setAttribute("id", 'adscritptcont')
    this._renderer2.appendChild(adcont, script)
    // this._renderer2.appendChild(this.ad, script);
    this._renderer2.appendChild(this._document.body, adcont);
  }

  ngOnInit(): void {
  }

}
