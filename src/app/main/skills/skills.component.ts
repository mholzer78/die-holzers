import { Component, Input } from '@angular/core';

import { ContentComponent } from '../../shared/content/content.component';
import { TableComponent } from '../../shared/table/table.component';
import { ProgressComponent } from '../../shared/progress/progress.component';
import { Skills } from '../content.type';

@Component({
  selector: 'app-skills',
  imports: [ContentComponent, TableComponent, ProgressComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  @Input ({required: true}) content!: Skills;
}
