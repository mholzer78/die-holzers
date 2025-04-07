import { Component, Input } from '@angular/core';

import { ContentComponent } from '../../shared/content/content.component';
import { Contact } from '../content.type';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContentComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input ({required: true}) content!: Contact;
}
