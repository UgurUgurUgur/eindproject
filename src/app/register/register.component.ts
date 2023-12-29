import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule],
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
  terms: boolean = false; /* made it false by default because the laws say that you need to accept them yourself and not prechecked  */
  news: boolean = false;
  showPassword = false; /* made it false by default so it is not shown by default */

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword; /* went from true to false */
  }

  toggleNews() {
    this.news = !this.news;
    console.log(this.news);
  }

  toggleTerms() {
    this.terms = !this.terms; /* went from true to false and vice versa when the checkbox is clicked */
    console.log(this.terms);
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



    /* TODO : check if email is already in the database and if the username is already in the database */


    else {
      console.log("name: " + this.name);
      console.log("surname:" + this.surname);
      console.log("username: " + this.username);
      console.log("email: " + this.email);
      console.log("password: " + this.password);
      console.log("news: " + this.news);

      localStorage.setItem("name", this.name);
      localStorage.setItem("surname", this.surname);
      localStorage.setItem("username", this.username);
      localStorage.setItem("password", this.password);
      localStorage.setItem("email", this.email);




      // Reset the form after submission so it doesnt get submitted again
      this.name = '';
      this.surname = '';
      this.username = '';
      this.password = ''; // here we clear the password from the page, but do not remove it
      this.email = '';
      this.confirmPassword = '';
      this.terms = false;
      this.news = false;
    }
  }

  // TODO : when database is connected put this in the database instead of the console log

}


