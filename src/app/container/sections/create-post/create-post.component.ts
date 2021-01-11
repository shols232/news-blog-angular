import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CreatePostService } from './create-post.service'

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss', 
  './buttons.component.scss', './input.component.scss', './dragndrop.component.scss']
})
export class CreatePostComponent implements OnInit {
  public Editor = ClassicEditor;
  editorConfig = {};
  postTo = ''
  public editorData = '';
  files: any[] = [];
  fileIsImage = true;
  loading = false;

  constructor(private createPostService: CreatePostService) { }

  ngOnInit(): void {
    this.editorConfig = {
      toolbar:[ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|', 'blockQuote', 'insertTable', 'undo', 'redo' ],
    }
  }


  logOut(){console.log(this.editorData)
  }

  switchPostTo(name: string){
    this.postTo = name
  }

  toggleFileType(){
    this.fileIsImage = !this.fileIsImage
  }


  onSubmit(form: NgForm){
    this.loading = true
    const formData = new FormData()

    formData.append('content', this.editorData)
    formData.append('title', form.value.title),
    formData.append('section', this.postTo.toUpperCase())

    if(this.fileIsImage){
      formData.append('image', this.files[0])
    }else{
      formData.append('video', this.files[0])
    }

    this.createPostService.createNewPost(formData).subscribe(data => {
      form.resetForm()
      this.editorData = ''
      this.postTo = ''
      this.files = []
      this.loading = false
    }, error => {
      console.error() 
      this.loading=false})
  }

  /**
   * on file drop handler
   */
  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes, decimals) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

}
