import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //pantalla de carga
  loading = true;

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

    this.registerForm = this.fb.group({
      name: [this.user.data.name, [ Validators.required, Validators.minLength(3)]],
      email: [this.user.data.email, [ Validators.required , Validators.email]],
      // password: [this.user.data.password, [ Validators.required ]],
      // password2: [this.user.data.password, [ Validators.required ]],
      country: [this.user.data.country, [ Validators.required ]],
      timeZone: [this.user.data.timeZone, [ Validators.required ]],
      language: [this.user.data.language, [ Validators.required ]],
    });

    this.loading = false;
  }

  ngOnInit(): void {
  }

  async guardarCambios(){
    //guardar los cambios
    if(!this.notValidField('name') || !this.notValidField('email')){
      Swal.fire('Error', '¡Ocurrió algún error!', 'error');
    } else {
      let variable : any = await this.userService.updateUser(this.registerForm.value, localStorage.getItem('uid'));
      if(variable.result){
        Swal.fire('Éxito', 'Información actualizada correctamente', 'success');
      } else {
        Swal.fire('Error', '¡Ocurrió algún error!', 'error');
      }
    }
    
  }

  notValidField ( field: string ):boolean {
    if ( this.registerForm.get(field).invalid && this.formSubmit) {
      return true;
    } else {
      return false;
    }
  }

}
