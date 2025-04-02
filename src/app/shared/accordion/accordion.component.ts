import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  @Input ({required: true}) content!: { question: string; answer: string[]; answerType: string };

  toggle(event: Event) {
    let accordion = ( <HTMLElement>event.target ).closest('.accordion');
    let grandParent = ( <HTMLElement>event.target ).closest('section');
console.log(accordion);
    if (accordion?.classList.contains('show')) {
      accordion?.classList.remove('show');
    } else {
      grandParent?.querySelectorAll('.accordion').forEach((item) => {
        item.classList.remove('show');
      })
      accordion?.classList.add('show');
    }
  }
}
