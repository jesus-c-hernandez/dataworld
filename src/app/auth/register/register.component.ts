import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user/user.service';
import Swal from 'sweetalert2';

import { Constants } from '../../Constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formSubmit = false;
  public loginImage = 1;

  countries : any = [];
  timeZones : any = []
  country = null;
  timeZone = null;

  timeZoneDisable = true;


  public registerForm = this.fb.group({
    name: [ , [Validators.required, Validators.minLength(3)]],
    email: [ , [Validators.required, Validators.email]],
    password: [ , [Validators.required]],
    password2: [ , [Validators.required]],
    country: [ , [Validators.required]],
    timeZone: [ , [Validators.required]],
    language: [ , [Validators.required]],
  }, {
    validators: this.samePasswords('password', 'password2')
  });

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router) { }


  ngOnInit() {
    this.init();
  }

  init() {
    this.loginImage = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    console.log('img', this.loginImage);
    this.countries = Constants.countries;
    this.country = this.countries[0];
    console.log('COUNTRIES', this.countries);
    console.log('COUNTRY', this.country);

  }


  createUser() {
    this.formSubmit = true;
    console.log(this.registerForm.value);

    if (this.registerForm.invalid) {
      return;
    } else {
      this.userService.createUser(this.registerForm.value)
        .subscribe(resp => {
          this.router.navigateByUrl('/dashboard');
        }, (err) => {
          // Si sucede un error
          Swal.fire('Error', err.error.msg, 'error');
        });
    }

  }

  notValidField(field: string): boolean {
    if (this.registerForm.get(field).invalid && this.formSubmit) {
      return true;
    } else {
      return false;
    }
  }

  notValidPass() {
    const pass1 = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value;

    if ((pass1 !== pass2) && this.formSubmit) {
      return true;
    } else {
      return false;
    }

  }

  samePasswords(pass1: string, pass2: string) {
    return (formGroup: FormGroup) => {

      const pass1Control = formGroup.get(pass1);
      const pass2Control = formGroup.get(pass2);

      if (pass1Control.value === pass2Control.value) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ noEsIgual: true })
      }

    }
  }

  login() {
    this.router.navigateByUrl('/login')
  }

  chooseCountry() {

    this.timeZones = [];
    
    const country = this.registerForm.value.country
    console.log('COD', country);

    if(!country){
      this.timeZoneDisable = true;
      return;
    }

    
    this.timeZones = Constants.timeZones.find( e => e.value === country).timeZones;
    
    console.log('TZ', this.timeZones);

    this.timeZoneDisable = false;
  }

}
