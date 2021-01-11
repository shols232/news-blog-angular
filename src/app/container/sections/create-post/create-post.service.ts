import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../../../../environments/environment'

@Injectable({providedIn: 'root'})
export class CreatePostService{

    constructor(private http: HttpClient){}

    createNewPost(form: FormData){
        return this.http
        .post(environment.backendUrl + '/post/create', form)
    }

}