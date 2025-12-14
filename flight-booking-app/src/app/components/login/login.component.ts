import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form!: FormGroup;

  message = '';

  constructor(private fb: FormBuilder, private flightService: FlightService, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.invalid) return;
    const { email, password } = this.form.value as any;
    this.flightService.login({ email, password }).subscribe((res) => {
      if (res.success) {
        this.message = 'Login successful (mock)';
        setTimeout(() => this.router.navigate(['/search']), 500);
      } else {
        this.message = 'Login failed';
      }
    });
  }
}
