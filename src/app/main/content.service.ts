import { Injectable } from '@angular/core';

import contentJson from './content.data.json';

@Injectable({providedIn: 'root'})
export class ContentService {
  private language: string = 'de';
  private readonly content: any = contentJson;

  getLang() {
    return this.language;
  }
  setLang(language:string) {
    this.language = language;
  }
  getContent() {
    return this.content[this.language];
  }
}
