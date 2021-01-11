import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../../../../environments/environment'
import { FullSectionPost } from '../shared/section-post.model'

@Injectable({providedIn: 'root'})
export class BlogPostService{

    constructor(private http: HttpClient){}

    getPostDetail(slug: string){
        return this.http
        .get<FullSectionPost>(environment.backendUrl + '/post/detail?slug=' + slug)
    }

}