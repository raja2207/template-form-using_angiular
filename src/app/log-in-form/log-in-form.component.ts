import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css']
})
export class LogInFormComponent implements OnInit {

  loginform={
    UserMailid: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }


  formes(){
    console.log(this.loginform);
    window.alert('Please wait checking our details')
  }
}
