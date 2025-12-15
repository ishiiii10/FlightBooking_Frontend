import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  registerForm;
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.minLength(6)]
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) return;

    console.log('Mock Register Data:', this.registerForm.value);

    this.successMessage = 'Registration successful (Mock)';

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);
  }
}