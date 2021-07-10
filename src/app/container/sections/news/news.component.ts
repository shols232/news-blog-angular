import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  section_name: string = 'NEWS'
  constructor() { }

  ngOnInit(): void {
  }

}
