import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  isLoading = false;

  constructor(private http: HttpClient, private router: Router) { }
  onSubmit(form: NgForm){
    this.isLoading = true
    this.http.post(environment.backendUrl + '/post/contact-us', form.value).subscribe(data => {
          form.resetForm()
          this.isLoading = false
        }, error => {
          console.error()
          this.isLoading = false
        })
    this.router.navigate(['/'])
  }
  
  ngOnInit(): void {
  }

}
