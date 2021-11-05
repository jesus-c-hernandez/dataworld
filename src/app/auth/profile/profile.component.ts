import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public formSubmit = false;
  public user: any;

  public registerForm = this.fb.group({
      name: ['', [ Validators.required, Validators.minLength(3)]],
      email: ['', [ Validators.required , Validators.email]],
      // password: [this.user.data.password, [ Validators.required ]],
      // password2: [this.user.data.password, [ Validators.required ]],
      country: ['', [ Validators.required ]],
      timeZone: ['', [ Validators.required ]],
      language: ['', [ Validators.required ]],
    });

  public editar: boolean = false;

  constructor( private fb : FormBuilder,
               private  userService: UserService ) { 
    this.getUser();
  }

  async getUser(){
    this.user = await this.userService.getUser(localStorage.getItem('uid'));
    console.log('Usuarioo', this.user);
  }

  ngOnInit(): void {
  }

  guardarCambios(){
    //guardar los cambios
    this.userService.updateUser(this.registerForm.value, localStorage.getItem('uid'));
  }

  notValidField ( field: string ):boolean {
    console.log('Llegó a notValidField');
    if ( this.registerForm.get(field).invalid && this.formSubmit) {
      console.log('cosa', this.registerForm.get(field));
      return true;
    } else {
      return false;
    }
  }

}
