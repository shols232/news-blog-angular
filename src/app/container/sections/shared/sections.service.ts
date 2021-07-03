import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../../../../environments/environment'
import { FullSectionPost } from './section-post.model'

@Injectable({providedIn: 'root'})
export class SectionsService{

    constructor(private http: HttpClient){}
// {'count':number, 'total_pages':string, 'current':string, 'next':string, 'previous':string, 'results':FullSectionPost[]}
    getSectionPosts(section_name: string){
        return this.http
        .get<{'count':number, 'total_pages':number, 'prev_page_number':number, 'next_page_number':number, 'current':number, 'next':string, 'previous':string, 'results':FullSectionPost[]}>(environment.backendUrl + '/post/list?section=' + section_name)
    }
    toNextPage(page_num: number, section_name: string){
        return this.http
        .get<{'count':number, 'total_pages':number, 'prev_page_number':number, 'next_page_number':number, 'current':number, 'next':string, 'previous':string, 'results':FullSectionPost[]}
        >(environment.backendUrl + `/post/list?section=${section_name}&page=${page_num}`)
    }
    getHomePosts(){
        return this.http
        .get<
        {'latest':FullSectionPost, 
        'headlines':FullSectionPost[],
        'entertainment':FullSectionPost[],
        'crime':FullSectionPost[],
        'politics':FullSectionPost[], 
        'romance':FullSectionPost[]}
        >(environment.backendUrl + '/post/home')
    }

    

}