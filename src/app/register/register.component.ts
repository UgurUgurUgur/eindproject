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
  confirmPassword: any;
  terms: any;
  showPassword = false; /* made it false by default so it is not shown by default */

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword; /* went from true to false */
  }


  onSubmit() {

    if (!this.name || !this.surname || !this.username || !this.password || !this.email) { /* if any of the fields are empty show an alert */
      alert("Please fill out all fields");
      return;
    }

    const termsaccepted = document.getElementById("terms") as HTMLInputElement; /* get the checkbox */
    if (!termsaccepted.checked) {                                           /* if the checkbox is not checked show an alert */
      alert("Please accept the terms and conditions");
      return;
    }



    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;        /* email must match this pattern */
    if (!emailPattern.test(this.email)) {                                   /* if the email does not match the pattern show an alert */
      alert("Please enter a valid email address");
      return;
    }

    /* Here we check if the password matches the pattern */
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;        /* password must be at least 8 characters, a number, and an uppercase letter */
    if (!passwordPattern.test(this.password)) {                             /* if the password does not match the pattern show an alert */
      alert("Password must contain at least 8 characters, a number, an uppercase letter and a lowercase letter");
      return;
    }
    /* Here we check if the passwords match  */
    if (this.password !== this.confirmPassword) {                           /* if the passwords do not match show an alert */
      document.getElementById("error")!.innerText = ("Passwords do not match");
      return;
    }


    else {
      console.log("name: " + this.name);
      console.log("surname:" + this.surname);
      console.log("username: " + this.username);
      console.log("email: " + this.email);
      console.log("password: " + this.password);


      // Reset the form after submission so it doesnt get submitted again
      this.name = '';
      this.surname = '';
      this.username = '';
      this.password = ''; // here we clear the password from the page, but do not remove it
      this.email = '';
      this.confirmPassword = '';
      this.terms = '';
    }
  }
  // TODO: make the route for the login page
  // TODO: when database is connected put this in the database instead of the console log

}


