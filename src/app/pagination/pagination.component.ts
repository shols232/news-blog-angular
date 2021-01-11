import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  pages: any = []
  // @Input() next_url: string
  // @Input() prev_url: string
  first_page_num: string
  @Input() prev_page_num: number
  @Input() next_page_num: number
  @Input() total_pages: number;
  @Input() current_page_num: number
  @Output('to_page') to_page: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  to_new_page(page_num: number){
    this.to_page.emit(page_num)
  }

}
