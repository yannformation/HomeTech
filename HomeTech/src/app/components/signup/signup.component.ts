import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm! : FormGroup;
  public passwordForm: FormGroup;
  public passwordCtrl:  FormControl;
  public firstName: FormControl;
  public lastName: FormControl;
  public mobile: FormControl;
  public email: FormControl;
  public confirmCtrl: FormControl;
  public passwordStrength = 0;

  static passwordMatch(group: FormGroup) {
    const password = group.get('passwordCtrl')?.value;
    const confirm = group.get('confirmCtrl')?.value;
    return password === confirm ? null : { matchingError: true };

  }

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router){

    this.firstName = this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]);
    this.lastName = this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]);
    this.mobile = this.fb.control('',[
      Validators.required,
      Validators.maxLength(10),
    ]);

    this.confirmCtrl = this.fb.control('', [Validators.required]);
    this.email = this.fb.control('', [Validators.required, Validators.email]);
    this.passwordCtrl = this.fb.control('', [Validators.required]);
    this.passwordForm = fb.group({
      passwordCtrl: this.passwordCtrl,
      confirmCtrl: this.confirmCtrl
  },{
    validators: SignupComponent.passwordMatch

  });

  this.passwordCtrl.valueChanges
    .pipe(debounceTime(400))
    .pipe(distinctUntilChanged())
    .subscribe(newValue => this.passwordStrength = newValue.length);

  this.signupForm = this.fb.group({
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    passwordForm: this.passwordForm,

  })
}



ngOnInit(): void {}

signUp(){
  this.http.post<any>("http://localhost:3000/signupUsers",this.signupForm.value)
  .subscribe(res=>{
    alert("Enregistrement réussi !!");
    this.signupForm.reset();
    this.router.navigate(['login']);
  },err=>{
    alert("Quelque chose s'est mal passé !!")
  })
}
}

