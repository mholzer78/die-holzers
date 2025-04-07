import { Component, Input } from '@angular/core';

import { ContentComponent } from '../../shared/content/content.component';
import { AccordionComponent } from '../../shared/accordion/accordion.component';
import { Qanda } from '../content.type';

@Component({
  selector: 'app-qanda',
  standalone: true,
  imports: [ContentComponent, AccordionComponent],
  templateUrl: './qanda.component.html',
  styleUrl: './qanda.component.scss'
})
export class QandaComponent {
  @Input ({required: true}) content!: Qanda;
}
