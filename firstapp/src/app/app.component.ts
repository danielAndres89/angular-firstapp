import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi primera aplicación con Angular';
  name: string;
  email: string;
  website: string
  hobbies: string[];
  show: boolean;

  constructor() {
    this.show = false;
    console.log("Contructor works");
    this.website = "https://www.google.com.ec/";
    this.name = "Daniel Guilcapi";
    this.email = "danniandres89@gmail.com";
    this.hobbies = ["run", "read", "write"];
  }

  showHobbies() {
    this.show = !this.show;
  }

  newHobby(hobby){
    //console.log(hobby.value);
    this.hobbies.push(hobby.value);
    hobby.value = "";
    return false;
  }

}


