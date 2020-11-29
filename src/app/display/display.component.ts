import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnChanges {
  @Input() expression = '';
  showedExpression = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes.expression) {
      if (changes.expression.currentValue === '') this.showedExpression = '0';
      else this.showedExpression = changes.expression.currentValue;
    }
  }
}
