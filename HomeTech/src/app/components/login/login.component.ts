import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  public loginForm! :FormGroup;
  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void{
    this.loginForm = this.formBuilder.group({
      email:[''],
    password:['']
    })

  }
}


