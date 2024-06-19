import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = $localize`user registration form`;

  internationalForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.internationalForm = this._formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
    });
  }

  ngOnInit(): void {}

  submit() {
    console.log(this.internationalForm.value);
    this.internationalForm.reset();
  }
}
