import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule /*  HttpClient */],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})

export class AdminComponent {

  title: any;
  description: any;
  imagePath: any;


  constructor(private sanitizer: DomSanitizer) { }

  sanitizeImage(base64String: string) {
    this.imagePath = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64,${base64String}`);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64String = btoa(reader.result as string);
      this.uploadImage(base64String);
    };
    reader.readAsBinaryString(file);
  }

  uploadImage(base64String: string) {
    // Implementation to send the base64 string to your API.
    console.log("Base64 string: " + base64String);
    this.sanitizeImage(base64String);                     /* shows the image in the browser */
  }

  newPost() {
    if (!this.title && !this.description) {
      alert("Please fill out the title and description");
      return;
    }
    
    else if (!this.title) {
      alert("Please fill out the title");
      return;
    }
    else if (!this.description) {
      alert("Please fill out the description");
      return;
    }

    // Implementation to send the new post to the API.
    console.log(this.title);
    console.log(this.description);
    
    

    this.title = "";
    this.description = "";
  }

}
