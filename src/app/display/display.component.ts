import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Expression } from '../../lib/Expression';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent {
  @Input() expression = new Expression();
}
