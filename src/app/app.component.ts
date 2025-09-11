import { Component, HostListener } from "@angular/core";

import { MainComponent } from "./main/main.component";
import { NavComponent } from "./nav/nav.component";

globalThis.window ??= {
  addEventListener: () => {},
} as never;

@Component({
    selector: "app-root",
    standalone: true,
    imports: [NavComponent, MainComponent],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent {
    title = "die-holzers";
    section = "is";

    @HostListener("window:scroll")
    onWindowScroll() {
        let scrollPosition =
            window.scrollY || document.documentElement.scrollTop;
        scrollPosition = scrollPosition + 160;

        const sections: any = document.querySelectorAll(".section");

        sections.forEach((section: HTMLElement) => {
            if (
                section.offsetTop <= scrollPosition &&
                section.offsetTop + section.offsetHeight > scrollPosition &&
                this.section !== section.id
            ) {
                this.section = section.id;
                history.pushState({}, "", "#" + section.id);
            }
        });
    }
}
