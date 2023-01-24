import {Component} from "@angular/core";

@Component({
  selector: 'not-found',
  template: `
    <div>
      Not found, go <a routerLink="/">Go home</a>?
    </div>
  `,
  styles: []
})
export class NotFoundComponent {
}
