import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cvForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    skills: ['']
  });

  constructor(private formBuilder: FormBuilder) {}

  get skillsList(): string[] {
    const rawSkills = this.cvForm.controls.skills.value;

    return rawSkills
      .split(',')
      .map((skill) => skill.trim())
      .filter((skill) => skill.length > 0);
  }
}
