import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './container/sections/auth/auth.service';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from '../environments/environment'
import { Title } from '@angular/platform-browser';

declare var gtag: Function

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../../node_modules/boxicons/css/boxicons.min.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'SkrapNews';

  
  constructor(private titleService: Title, private authService: AuthService, private cookieService: CookieService, router: Router){
    // const script = document.createElement('script');
    // script.async = true;
    // script.src = 'https://www.googletagmanager.com/gtag/js?id=' + environment.analyticsCode;
    // document.head.prepend(script);
    // this.titleService.setTitle('Home');
    const navEndEvent$ = router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    );
    navEndEvent$.subscribe((e: NavigationEnd) => {
      gtag('config', environment.analyticsCode, {'page_path':e.urlAfterRedirects});
    });
  }

  ngOnInit(){
    this.authService.autoLogin()
  }
}
