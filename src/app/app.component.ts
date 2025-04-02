import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fromEvent, throttleTime } from 'rxjs';

import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'die-holzers';
  section = 'is';

  constructor() {
    fromEvent(window, 'scroll')
      .pipe(throttleTime(100))
      .subscribe((event) => this.onWindowScroll(event));
  }

  onWindowScroll(event: Event) {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    scrollPosition = scrollPosition + 160;

    const sections: any = document.querySelectorAll('.section');

    sections.forEach((section: HTMLElement) => {
      if (
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition &&
        this.section !== section.id
      ) {
        this.section = section.id;
        history.pushState({}, '', '#' + section.id)
      }
    });
  }
}
