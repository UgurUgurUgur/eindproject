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

  onSubmit() {
    console.log("name: " + this.name);
    console.log("surname:"  + this.surname);
    console.log("username: " + this.username);
    console.log( "email: " + this.email);
    // We want to keep the password private so we don't send it to the console


    // Reset the form after submission so it doesnt get submitted again
    this.name = '';
    this.surname = '';
    this.username = '';
    this.password = ''; // here we clear the password from the page but do not remove it
    this.email = '';
  }

  // TODO: Add form validation
  // TODO: Add error handling
  // TODO: Add email validation
  // TODO: Add password validation
  // TODO: make the route for the login page
  // TODO: make a term and conditions page with a checkbox that isnt checked by default and needs to be checked by the user to submit
}


