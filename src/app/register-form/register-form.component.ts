import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  regform={
    Name:'',
    Email:'',
    Phoneno:'',
    DOB:'',
    Password:'',
    ConformPassword:'',
  };

  constructor() { }

  ngOnInit(): void {
  }

  Regforme(){
    console.log(this.regform);
    window.alert('Successfully complete go to login page');

  };
}
