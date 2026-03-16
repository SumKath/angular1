import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected submitted = false;

  protected readonly certificateForm = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    courseName: ['', [Validators.required, Validators.minLength(3)]],
    issueDate: ['', Validators.required],
    issuerName: ['', [Validators.required, Validators.minLength(2)]]
  });

  constructor(private readonly fb: FormBuilder) {}

  protected generateCertificate(): void {
    this.submitted = true;

    if (this.certificateForm.invalid) {
      this.certificateForm.markAllAsTouched();
      return;
    }
  }

  protected get fullName() {
    return this.certificateForm.controls.fullName;
  }

  protected get courseName() {
    return this.certificateForm.controls.courseName;
  }

  protected get issueDate() {
    return this.certificateForm.controls.issueDate;
  }

  protected get issuerName() {
    return this.certificateForm.controls.issuerName;
  }
}
