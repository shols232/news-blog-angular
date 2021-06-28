import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from '../../../../environments/environment'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  onSubmit(form: NgForm){
    this.http.post(environment.backendUrl + '/post/contact-us', form.value).subscribe(data => {
          form.resetForm()
        }, error => {
          console.error()
        })
  }
  
  ngOnInit(): void {
  }

}
