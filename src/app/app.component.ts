import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DiService } from './diservice.service';
import { DemoPipe } from './demo.pipe';

@Component({
  selector: 'app-user',
  template: `
    Username: {{ username }}<br>
    The input Parameter value is {{ inputParameter }}
  `,
  standalone: true,
})
export class UserComponent {
  username = 'John Doe';
  @Input() inputParameter = '';
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
  selector: "app-child",
  standalone: true,
  template: `
    <button (click)="addItem()">ADD</button>
  `,
})
export class ChildComponent{
  @Output() addItemEvent = new EventEmitter<string>();
  addItem() {
    this.addItemEvent.emit("🐢");
  }
}

@Component({
  selector: 'app-defer',
  template: `
    <ul>
      <li>hello</li>
      <li>world</li>
      <li>angular</li>
    </ul>
  `,
  standalone: true
})
export class DeferComponent{}

@Component({
  selector: 'app-form',
  standalone: true,
  template: `
    <label for="form-input">
      Type an input word: <input id="form-input" type="text" [(ngModel)]="input">
    </label>
    <br>
    <!-- <p>input is {{ input }}</p> -->
     <button (click)="showPopup()">Pop-Up</button>
  `,
  imports: [FormsModule]
})
export class FormComponent{
  input = '';

  showPopup(){
    alert(this.input);
  }
}

@Component({
  selector: 'app-react-form',
  standalone: true,
  template: `
    <form [formGroup]="form"  (ngSubmit)="show()">
      <label>
        Name: <input type="text" formControlName="name">
      </label>
      <label>
        Email: <input type="email" formControlName="email">
      </label>
      <button type="submit" [disabled]="!form.valid">Submit</button>
    </form>
  `,
   imports: [ReactiveFormsModule]
})
export class ReactiveFormComponent{
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email)
  })

  show(){
    alert(this.form.value.name + " | " +this.form.value.email);
  }
}

@Component({
  selector: 'app-di-service',
  standalone: true,
  template: `
    <!-- <p>{{ service.getAll().join('✨') }}</p> -->
     <p>{{ service }}</p>
  `,
})
export class DiServiceComponent{
  // service = inject(DiService)
  service = '';
  constructor(private diservice: DiService){
    this.service = this.diservice.getAll().join('✨')
  }
}

@Component({
  selector: 'app-pipes',
  standalone: true,
  template: `
    <p>Uppercase : {{ msg | uppercase }}</p>
    <p>Lowercase : {{ msg | lowercase }}</p>
    <p>Currency : {{ cost | currency:'USD' }}</p>
    <p>Date : {{ date | date:'medium' }}</p>
    <p>Decimal : {{ num | number : '3.2-2' }}</p>
    <h3>Custom Pipe</h3>
    <p>{{ numb | demo }}</p>
  `,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    DatePipe,
    DecimalPipe,
    DemoPipe
  ]
})
export class PipesComponent{
  msg = "heLlo thErs!"
  cost = 10003
  date = new Date("2022-01-01");
  num = 10000.123
  numb = 20
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent,
    IfComponent,
    ForComponent,
    EventComponent,
    ChildComponent,
    DeferComponent,
    NgOptimizedImage,
    RouterOutlet,
    RouterLink,
    FormComponent,
    ReactiveFormComponent,
    DiServiceComponent,
    PipesComponent
],
  template: `
  Hello Universe! A ping from{{ city }} {{1+1}}!
  <section>
    <app-user inputParameter="InputParamwter"/>
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
  <div>
    <app-child (addItemEvent) = "addItemParent($event)"></app-child>
    <p>🐢 : {{item.length}}</p>
  </div>
  <section>
    <h1>Defer Example : Loading Data Model</h1>
    <p>
      qwertyuiop;lkjhgfdscvbnm,mnbvcdxsdfghjkjbvcxcvb
    </p>
    @defer (on viewport) {
      <app-defer/>
    }@placeholder {
      <p>Placeholder</p>
    }@loading (minimum 2s) {
      <p>Loading...</p>
    }
  </section>
  <div>
    <h3>Image Optimizer</h3>
    <ul>
      <li>
        Image : <img [ngSrc]="dynamicImg" alt="alt-img" width="100" height="100" priority/>
      </li>
    </ul>
  </div>
  <div>
    <nav>
      <a href="https://angular.io/" target="_blank">Angular</a>
      |
      <a href="https://github.com/haristar" target="_blank">Github</a>
    </nav>
  </div>
  <div>
    <nav>
      <a routerLink="/home">home</a>
      |
      <a routerLink="/demo">Demo</a>
    </nav>
    <router-outlet></router-outlet>
  </div>
  <div>
    <h3>FOrms</h3>
    <app-form></app-form>
  </div>
  <br>
  <div>
    <h3>Reactive Forms</h3>
    <app-react-form></app-react-form>
  </div>
  <div>
    <h3>DI Service</h3>
    <app-di-service></app-di-service>
  </div>
  <div>
    <h3>Pipes</h3>
    <app-pipes></app-pipes>
  </div>
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
  dynamicImg = "crab.jpeg";
  item = new Array();

  addItemParent(item: string){
    console.log("parent ",item);
    this.item.push(item);
  }
}
