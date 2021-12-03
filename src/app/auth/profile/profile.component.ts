import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user/user.service';
import Swal from 'sweetalert2';

import { Constants } from '../../Constants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  //pantalla de carga
  loading = true;

  timeZone = null;

  timeZoneDisable = true;

  public formSubmit = false;
  public user: any;

  countries: any = [];
  timeZones: any = [];
  languages: any = [];

  Constants: any = Constants;

  public registerForm = this.fb.group({
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
    country: [, [Validators.required]],
    timeZone: [, [Validators.required, Validators.maxLength(4)]],
    language: [, [Validators.required]],
  });

  public editar: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.getUser();
  }

  async getUser() {
    this.user = await this.userService.getUser(localStorage.getItem('uid'));
    console.log('Usuarioo', this.user);

    this.countries = Constants.countries;
    this.languages = Constants.languages;
    this.timeZones = Constants.timeZones.find(
      (e) => e.value === this.user.data.country
    ).timeZones;

    console.log(this.timeZones);

    // TODO: Cambiar lo que se guarda en el campo timezone por el codigo de la zona horaria.
    this.timeZone = this.timeZones.find(
      (t) => t.code === this.user.data.timeZone
    );

    this.registerForm = this.fb.group({
      name: [
        this.user.data.name,
        [Validators.required, Validators.minLength(3)],
      ],
      email: [
        this.user.data.email,
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ],
      ],
      country: [this.user.data.country, [Validators.required]],
      timeZone: [, [Validators.required]],
      language: [this.user.data.language, [Validators.required]],
    });
    console.log(this.timeZone);

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  ngOnInit(): void {}

  async guardarCambios() {
    const timeZone = typeof this.registerForm.value.timeZone;
    console.log(timeZone);

    const error = Constants.profile.someError;
    
    //guardar los cambios
    if (this.registerForm.invalid || timeZone != 'string' ) {
      Swal.fire('Error', `¡${Constants.profile.someError}!`, 'error');
    } else {
      console.log('REG', this.registerForm.value.timeZone);
      
      let variable: any = await this.userService.updateUser(
        this.registerForm.value,
        localStorage.getItem('uid')
      );
      if (variable.result) {
        console.log('VARIA', variable);
        localStorage.setItem('language', variable.user.language );
        Swal.fire(`${Constants.profile.success}`, `${Constants.profile.infoSucc}`, 'success');
        setTimeout(() => {
          location.reload();
         }, 1000);
      } else {
        Swal.fire('Error', `¡${Constants.profile.someError}!`, 'error');
      }
    } 
  }

  notValidField(field: string): boolean {
    if (this.registerForm.get(field).invalid && this.formSubmit) {
      return true;
    } else {
      //el campo es válido, regresar falso
      return false;
    }
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
