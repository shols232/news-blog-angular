import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FullSectionPost } from '../shared/section-post.model';
import { BlogPostService } from './blog-post.service'
import { Location } from '@angular/common'


@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogPostComponent implements OnInit {
  post: FullSectionPost
  errorMsg = ''

  constructor(private route: ActivatedRoute, private router: Router, private bpService: BlogPostService) { }

  ngOnInit(): void {
    this.getData()
  }


  getData(){
    this.route.params.subscribe(path => {
      console.log(path['slug'])
      this.bpService.getPostDetail(path['slug']).subscribe(data => {
        console.log(data)
        if(data['status']==404){
          this.errorMsg = data['message']
          console.log(data['message'])
        }
        this.post = data
      }, error => {
        console.log(error, error['message'])
        if(error.status == 404){
          this.router.navigate(['/'])
          console.log('aye ooooo!')
        }
        
      })
    })
  }
}
