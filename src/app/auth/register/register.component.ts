import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formSubmit = false;

  public registerForm = this.fb.group({
    name: ['Jesus', [ Validators.required, Validators.minLength(3) ]],
    email: ['test001@gmail.com', [ Validators.required , Validators.email]],
    password: ['123456', [ Validators.required ]],
    password2: ['123456', [ Validators.required ]],
    termino: [ true, [ Validators.required ]],
  }, {
    validators: this.samePasswords( 'password', 'password2' )
  });

  constructor(  private fb : FormBuilder,
                private  userService: UserService,
                private router: Router ) { }

  ngOnInit(){

  }

  createUser () {
    this.formSubmit = true;

    if ( this.registerForm.invalid ) {
      return;
    } else {
      this.userService.createUser( this.registerForm.value )
        .subscribe( resp => {
          this.router.navigateByUrl('/dashboard');
        }, ( err ) => {
          // Si sucede un error
          Swal.fire( 'Error', err.error.msg, 'error' );          
        });
    }
    
  }

  notValidField ( field: string ):boolean {
    
    if ( this.registerForm.get(field).invalid && this.formSubmit) {
      return true;
    } else {
      return false;
    }
  }

  aceptTermino () {
    return !this.registerForm.get('termino').value && this.formSubmit;
  }

  notValidPass() {
    const pass1 = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value;

    if ( (pass1 !== pass2) && this.formSubmit ){
      return true;
    } else {
      return false;
    }

  }

  samePasswords ( pass1: string, pass2: string ) {
    return ( formGroup: FormGroup ) => {

      const pass1Control = formGroup.get(pass1);
      const pass2Control = formGroup.get(pass2);

      if ( pass1Control.value === pass2Control.value ) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ noEsIgual: true })
      }

    }
  }

  login() {
    this.router.navigateByUrl('/login')
  }

}