import { Component } from '@angular/core';

import { IsComponent } from './is/is.component';
import { WorkComponent } from './work/work.component';
import { SkillsComponent } from './skills/skills.component';
import { QandaComponent } from './qanda/qanda.component';
import { ContactComponent } from './contact/contact.component';
import { ContentService } from './content.service';
import { DownloadCvComponent } from './download-cv/download-cv.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    IsComponent,
    WorkComponent,
    SkillsComponent,
    QandaComponent,
    ContactComponent,
    DownloadCvComponent
  ],
  templateUrl: './main.component.html',
})
export class MainComponent {
  lang!: string;

  constructor(private readonly contentService: ContentService) {}

  get fullContent() {
    return this.contentService.getContent();
  }
}
