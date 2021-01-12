import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../container/sections/auth/auth.service';
import {  trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss', './hamburgers.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(-100%)'
      })),
      state('out', style({
        transform: 'translateX(0%)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class NavigationComponent implements OnInit {
  navOpened = false;
  extrasShown = false;
  wasInside = false
  authenticated: boolean

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    const token = this.authService.token.getValue()
    this.authenticated = !!token
  }

  @HostListener('window:scroll', ['$event'])
    onWindowScroll($event) {
      if(this.navOpened){
        this.toggleMenu()
      }
        // this.scrolled = $event.srcElement.scrollTop >= 150;
    }

  menuState:string = 'in';

toggleMenu() {
  // 1-line if statement that toggles the value:
  this.navOpened = !this.navOpened
  this.menuState = this.menuState === 'out' ? 'in' : 'out';
}

  hamburgerToggleOpen(){
    this.navOpened = !this.navOpened
  }

  clicky(){
    this.extrasShown = false;
  }

  toggleExtras(){
    this.extrasShown = !this.extrasShown
  }

  toggled(){
    if (this.extrasShown){
      this.extrasShown = false
    }
    
  }

}

