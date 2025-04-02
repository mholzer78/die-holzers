import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentService } from '../main/content.service';

@Component({
  selector: 'app-nav',
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  @Input ({required: true}) section!: string;
  constructor(private contentService: ContentService) {}

  get language() {
    return this.contentService.getLang();
  }
  changeLang(value: string) {
    this.contentService.setLang(value);
  }
}
