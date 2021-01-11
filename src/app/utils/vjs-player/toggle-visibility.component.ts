import { TitleCasePipe } from '@angular/common';
import { Component, Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[selector]'
})
export class toggleVisibilityDirective {
  public text: String;
  @Input() initator: ElementRef
  @Output() toggleClicked: EventEmitter<void> = new EventEmitter<void>()
  
  constructor(private eRef: ElementRef, private renderer: Renderer2) { }

  
  @HostListener('document:click', ['$event.target'])
  @HostListener('window:scroll', ['$event.target'])
  clickout(div) {
    if(div != this.initator){
      console.log(this.text)
      this.toggleClicked.emit()
    }
    // if (!this.wasInside) {
    //   console.log(this.text + 'dattebayo')
    //   this.text = "clicked outside";
    //   this.toggleClicked.emit()
    // }
  }
  
  
}