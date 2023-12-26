import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: any;
  password: any;
  showPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword; /* went from true to false */
  }


  /* check(){
    if (this.username == " " && this.password == ""){         only wil work if password will be stored in a database
      return true;
    }
    else{ 
      return false;
    }
  } */


  onSubmit() {
    if (this.username == "admin" && this.password == "admin") { /* the login for admin. The password is just a prototype */ 
      console.log("admin works!");
    }
    else if (!this.username || !this.password) { /* if any of the fields are empty show an alert */
      alert("Please fill out all fields");
      return;
    }
    else {
      alert("Login successful");
      console.log("It works");
    }
  }

  //TODO: check if password is correct with own database and api
  //TODO: check if username is correct with own database and api
  //TODO: Make a forgot password
  //TODO: Make a route to the register
  


}
