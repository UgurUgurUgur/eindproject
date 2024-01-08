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

/* export class ImageUploadComponent {
  selectedFile: File | null = null;
  imageUrl: string | ArrayBuffer | null = '';
  onFileSelected(event: any): void {
    this.selectedFile = (event.target as HTMLInputElement).files[0]; need to fix this error
   }
} */


export class AdminComponent {

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
    console.log(base64String);
  }

}
