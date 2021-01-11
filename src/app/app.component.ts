import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './container/sections/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../../node_modules/boxicons/css/boxicons.min.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'daincyblog';

  constructor(private authService: AuthService, private cookieService: CookieService){}

  ngOnInit(){
    this.authService.autoLogin()
    console.log(this.cookieService.get('token'))
  }
}
