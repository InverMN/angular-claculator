import { Component } from '@angular/core';
import { DisplayComponent } from './display/display.component';
import { ControlsComponent } from './controls/controls.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  expression = '';
}
