import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  title = '';
  image = '';
  description = '';


  newPost() {                                       /* this function is called when the new post button is pressed  */
    console.log("title: " + this.title);
    console.log( "image: " + this.image);
    console.log( "description: " + this.description);

    this.title = '';
    this.image = '';     
    this.description = '';
  }


}
