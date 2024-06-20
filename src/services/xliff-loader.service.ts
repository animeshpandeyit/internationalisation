import { Injectable } from '@angular/core';
import { parseString } from 'xml2js';

@Injectable({
  providedIn: 'root',
})
export class XliffLoaderService {
  constructor() {}

  parseXlf(xlfContent: string): Record<string, string> {
    let translations: Record<string, string> = {};
    parseString(xlfContent, (err, result) => {
      if (err) {
        console.error('Failed to parse XLF file', err);
        return;
      }
      const transUnits = result['xliff']['file'][0]['body'][0]['trans-unit'];
      transUnits.forEach((unit: any) => {
        translations[unit['source'][0]] = unit['target'][0];
      });
    });
    return translations;
  }
}
