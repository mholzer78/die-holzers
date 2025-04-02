import { Component, Input } from '@angular/core';

import { ContentComponent } from '../../shared/content/content.component';
import { TableComponent } from '../../shared/table/table.component';
import { Work } from '../content.type';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [ContentComponent, TableComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  @Input ({required: true}) content!: Work;
}
