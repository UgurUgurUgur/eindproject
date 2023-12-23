import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name: any;
  surname: any;
  username: any;
  password: any;
  email: any;
  /* terms: true | false = false; */
  /* TERMS IS IN COMMENTS BECAUSE IT IS NOT IMPLEMENTED */

  onSubmit() {

    if (!this.name || !this.surname || !this.username || !this.password || !this.email ) { /* if any of the fields are empty show an alert */
        alert("Please fill out all fields");
        return;
    }
    /* else if (!this.terms) {
        alert("Please accept the terms and conditions");
        return;
    } */
    else {
      console.log("name: " + this.name);
      console.log("surname:"  + this.surname);
      console.log("username: " + this.username);
      console.log( "email: " + this.email);
      // We want to keep the password private so we don't send it to the console  
      // Reset the form after submission so it doesnt get submitted again
      this.name = '';
      this.surname = '';
      this.username = '';
      this.password = ''; // here we clear the password from the page, but do not remove it
      this.email = '';
    }
  }

  // TODO: Add error handling
  // TODO: Add email validation
  // TODO: Add password validation
  // TODO: make the route for the login page
  // TODO: IMPLEMENT terms and conditions
}


