import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  authSub: Subscription
  title='Login'
  constructor(private authService: AuthService, private router: Router) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.authSub = this.authService.logIn(form.value.username, form.value.password).subscribe(() => {
      this.router.navigate(['create-post'])
    })
    }


  ngOnDestroy(){
    this.authSub.unsubscribe()
  }
}
