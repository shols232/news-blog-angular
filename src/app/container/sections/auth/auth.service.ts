import { Injectable } from '@angular/core'
import { BehaviorSubject, throwError } from 'rxjs'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, last, tap } from 'rxjs/operators'
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router'
import { environment } from '../../../../environments/environment'


@Injectable({providedIn: 'root'})
export class AuthService{
    token: BehaviorSubject<string> = new BehaviorSubject<string>(null)

    constructor(private http: HttpClient, 
        private cookies: CookieService, 
        private router: Router
        ){}

    logIn(username: string, password: string){
       return this.http
       .post<{token:string}>(
           environment.backendUrl + '/auth/login', {
            username:username,
            password:password,
        })
        .pipe(
            tap((resData) => {
                this.token.next(resData.token)
                this.cookies.set('token', JSON.stringify(resData.token), 1, '/')
            })
        )
    }

    autoLogin(){
        let userCookie = this.cookies.get('token')
        if (userCookie){
            const token: string = JSON.parse(userCookie)
            this.token.next(token)
        }
    }

    logOut(){
        this.token.next(null)
        this.cookies.delete('token')
        this.router.navigate(['/entertainment'])
    }

    private handleErrors(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknown error occurred!';
        if (!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already';
                break;
            case 'EMAIL_NOT_FOUND' || 'INVALID_PASSWORD':
                errorMessage = 'username or password does not exist.';
                break;
        }
        return throwError(errorMessage);
    }

}
