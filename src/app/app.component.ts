import { Component } from '@angular/core';
import { Expression } from '../lib/Expression';
import { DisplayComponent } from './display/display.component';
import { ButtonComponent } from './button/button.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  expression = new Expression();
}
