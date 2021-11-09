import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { RegisterForm } from '../../../interfaces/register-form.interface';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment.prod';

import { LoginForm } from '../../../interfaces/login-form.interface';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

import { User } from '../../../models/user.model';

const base_url = environment.base_url;
declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public auth2: any;
  public user: User;

  constructor(
    private http: HttpClient,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.googleInit();
  }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get uid(): string {
    return this.user.uid;
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token,
      },
    };
  }

  googleInit() {
    return new Promise<void>((resolve) => {
      gapi.load('auth2', () => {
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        this.auth2 = gapi.auth2.init({
          client_id:
            '505498109082-nf6f858gcb9sejl0mdil65rioa21n7r0.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
        });
        resolve();
      });
    });
  }

  saveLocalStorage(token: string) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.removeItem('token');
    this.auth2.signOut().then(() => {
      this.ngZone.run(() => {
        this.router.navigateByUrl('/login');
      });
    });
  }

  validateToken(): Observable<boolean> {
    return this.http
      .get(`${base_url}/login/renew`, {
        headers: {
          'x-token': this.token,
        },
      })
      .pipe(
        map((resp: any) => {
          const { name, email, google, role, uid } = resp.data;
          this.user = new User(name, email, '', google, role, uid);
          this.saveLocalStorage(resp.token);
          return true;
        }),
        catchError((err) => of(false))
      );
  }

  createUser(formData: RegisterForm) {
    return this.http.post(`${base_url}/users`, formData).pipe(
      tap((resp: any) => {
        this.saveLocalStorage(resp.token);
        console.log('Create User', resp);
        
      })
    );
  }

  updateUser(data: any, uid: string) {
    console.log('data', data);
    console.log('uid', uid);
    return this.http.put(`${base_url}/users/${uid}`, data).toPromise();
  }

  login(formData: LoginForm) {
    console.log('BASE', base_url);
    
    return this.http.post(`${base_url}/login`, formData).pipe(
      tap((resp: any) => {
        this.saveLocalStorage(resp.token);
      })
    );
  }

  loginGoogle(token) {
    return this.http.post(`${base_url}/login/google`, { token }).pipe(
      tap((resp: any) => {
        this.saveLocalStorage(resp.token);
      })
    );
  }

  getUser(id: string) {
    return this.http.get(`${base_url}/users?id=${id}`).toPromise();
  }
}
