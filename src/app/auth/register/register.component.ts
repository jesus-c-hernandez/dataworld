import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user/user.service';
import Swal from 'sweetalert2';

import { Constants } from '../../Constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  //pantalla de carga
  loading: boolean = true;

  public formSubmit = false;
  public loginImage = 1;

  countries: any = [];
  timeZones: any = [];
  languages: any = [];

  timeZone = null;

  timeZoneDisable = true;

  public registerForm = this.fb.group(
    {
      name: [, [Validators.required, Validators.minLength(3)]],
      email: [
        ,
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ],
      ],
      password: [, [Validators.required]],
      password2: [, [Validators.required]],
      country: [, [Validators.required]],
      timeZone: [, [Validators.required]],
      language: [, [Validators.required]],
    },
    {
      validators: this.samePasswords('password', 'password2'),
    }
  );

  Constants: any = Constants;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.loginImage = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    console.log('img', this.loginImage);
    this.countries = Constants.countries;
    this.languages = Constants.languages;
    setTimeout(() => {
      this.loading = false;
     }, 1000);
  }

  createUser() {
    this.formSubmit = true;
    console.log('VALID', this.registerForm.valid);

    console.log(this.registerForm.value);

    if (this.registerForm.invalid) {
      return;
    } else {
      this.userService.createUser(this.registerForm.value)
        .subscribe(resp => {
          localStorage.setItem('uid', resp.user.uid);
          localStorage.setItem('case', String(1));
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

    if (pass1 !== pass2 && this.formSubmit) {
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
        pass2Control.setErrors({ noEsIgual: true });
      }
    };
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  chooseCountry() {
    this.timeZones = [];
    this.timeZone = null;
    const country = this.registerForm.value.country;
    if (!country) {
      this.timeZoneDisable = true;
      return;
    }
    this.timeZones = Constants.timeZones.find(
      (e) => e.value === country
    ).timeZones;
    this.timeZoneDisable = false;
  }
}
