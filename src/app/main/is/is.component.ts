import { Component, Input } from '@angular/core';

import { ContentComponent } from '../../shared/content/content.component';
import { TableComponent } from '../../shared/table/table.component';
import { Is } from '../content.type';

@Component({
  selector: 'app-is',
  standalone: true,
  imports: [ContentComponent, TableComponent],
  templateUrl: './is.component.html',
  styleUrl: './is.component.scss',
})
export class IsComponent {
  @Input ({required: true}) content!: Is;
}
