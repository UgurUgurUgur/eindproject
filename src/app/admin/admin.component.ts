import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,  HttpClient],
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

  title = '';
  description = '';






  newPost() {                                       /* this function is called when the new post button is pressed  */
    console.log("title: " + this.title);
    console.log("description: " + this.description);

    this.title = '';
    this.description = '';

  }


}
