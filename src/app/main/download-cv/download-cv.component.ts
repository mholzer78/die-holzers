import { Component, Input } from '@angular/core';

import { Cv } from '../content.type';

@Component({
  selector: 'app-download-cv',
  standalone: true,
  imports: [],
  templateUrl: './download-cv.component.html',
  styleUrl: './download-cv.component.scss'
})
export class DownloadCvComponent {
  @Input ({required: true}) content!: Cv;
}
