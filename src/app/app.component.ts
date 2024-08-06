import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  template: `
    Username: {{ username }}
  `,
  standalone: true,
})
export class UserComponent {
  username = 'John Doe';
}

@Component({
  selector: 'app-if',
  template: `@if(correct){
      <h3>If Statement</h3>
      }
      @else{
      <h3>Else Statement</h3>
      }`,
  standalone: true
})

export class IfComponent {
  correct = false;
}

@Component({
  selector: 'app-for',
  template: `
    @for(item of sample; track item.name) {
      <p>{{ item.name }}</p>
    }
  `,
  standalone: true,
})
export class ForComponent {
  sample = [{name: 'John'}, {name: 'Doe'}, {name: 'Jane'}, {name: 'Fly'}];
}

@Component({
  selector: 'app-event',
  template: `
    <section>
      <button (click)="onClick()">Click Me</button>
      <p>{{ click }}</p>
    </section>

    <section (mouseover)="onMouseOver()">
      <p>There's a secret message for you, hover to reveal:
      {{ message }}</p>
    </section>

  `,
  standalone: true
})
export class EventComponent{
  click=''
  message='';
  onClick() {
    this.click='Event Triggered! 🏄';
  }

  onMouseOver() {
    this.message='🎩 👑';
  }
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent,
    IfComponent,
    ForComponent,
    EventComponent
  ],
  template: `
  Hello Universe! A ping from{{ city }} {{1+1}}!
  <section>
    <app-user></app-user>
  </section>
  <section>
    <app-if></app-if>
  </section>
    <section>
    <app-for></app-for>
  </section>
  <div [contentEditable]="canEdit">
    <p>Hello Edit!</p>
  </div>
  <div>
    <app-event></app-event>
  <div></div>
  `,
  styles: `
  :host {
    color: var(--gray-700);
  }`,
})
export class AppComponent {
  title = 'demo-ang';
  city = 'New York';
  canEdit = true;
}
