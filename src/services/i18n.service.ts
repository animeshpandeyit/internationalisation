import { Injectable } from '@angular/core';
import { XliffLoaderService } from './xliff-loader.service';
import { HttpClient } from '@angular/common/http';
import { loadTranslations } from '@angular/localize';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  constructor(
    private http: HttpClient,
    private xliffLoader: XliffLoaderService
  ) {}

  setLocale(locale: string): void {
    const translationFilePath = `assets/locale/messages.${locale}.xlf`;

    this.http
      .get(translationFilePath, { responseType: 'text' })
      .subscribe((xlfContent: string) => {
        const translations = this.xliffLoader.parseXlf(xlfContent);
        loadTranslations(translations);
      });
  }
}
