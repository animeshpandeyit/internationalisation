import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { I18nService } from '../services/i18n.service';
import { XliffLoaderService } from '../services/xliff-loader.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, HttpClientModule],
  providers: [I18nService, XliffLoaderService],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = $localize`user registration form`;

  internationalForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private i18nService: I18nService
  ) {
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

  switchLanguage(locale: string): void {
    this.i18nService.setLocale(locale);
  }
}
