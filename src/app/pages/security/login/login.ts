import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../../shared/services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private auth: Auth, private router: Router) {}

  onSubmit(): void {
    const { email, password } = this.formLogin.value;

    if (!email || !password) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    this.auth.login(email, password);

    if (this.auth.isConnected()) {
      this.router.navigate(['/compte/demande']);
    } else {
      alert('Email ou mot de passe incorrect.');
    }
  }
}
