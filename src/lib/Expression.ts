interface ExpressionNumber {
  type: 'number';
  value: string;
}

type Operator = '+' | '-' | '*' | '/';

interface ExpressionOperator {
  type: 'operator';
  value: Operator;
}

type ExpressionSegment = ExpressionNumber | ExpressionOperator;

export class Expression extends Array<ExpressionSegment> {
  toString(): string {
    let outputString = '';
    this.forEach((segment) => (outputString += ` ${segment.value} `));
    return outputString.trim();
  }

  toRawString(): string {
    let outputString = '';
    this.forEach((segment) => (outputString += `(${segment.value})`));
    return '[' + outputString.trim() + ']';
  }

  append(newSegmentValue: string) {
    const lastSegment = this[this.length - 1];

    const isOperator = ['-', '+', '*', '/'].includes(newSegmentValue);

    if (isOperator && this.length !== 0) {
      if (lastSegment.type === 'operator')
        this[this.length - 1].value = newSegmentValue;
      else {
        this.solve();
        this.push({
          type: 'operator',
          value: newSegmentValue,
        } as ExpressionOperator);
      }
    } else if (!isOperator) {
      if (
        (this.length === 0 || lastSegment.type === 'operator') &&
        newSegmentValue !== '.'
      )
        this.push({ type: 'number', value: newSegmentValue });
      else {
        const negativeNumber = this[this.length - 1].value.startsWith('(-');
        if (negativeNumber) this.negate();
        this[this.length - 1].value = lastSegment.value + newSegmentValue;
        if (negativeNumber) this.negate();
      }
    }
  }

  clear() {
    this.length = 0;
  }

  removeLastSegment() {
    if (this[this.length - 1].type === 'number') this.pop();
  }

  removeLastDigit() {
    const last = this[this.length - 1];

    if (last.type === 'number')
      if (String(this[this.length - 1].value).length === 1) this.pop();
      else
        this[this.length - 1].value = String(last.value).slice(
          0,
          String(last.value).length - 1
        );
  }

  lastNumber(): string {
    const lastSegment = this[this.length - 1];

    if (this.length === 0) return '0';
    else
      return lastSegment.type === 'number'
        ? lastSegment.value
        : this[this.length - 2].value;
  }

  negate() {
    if (this.length !== 0) {
      const lastNumber =
        this[this.length - 1].type === 'number'
          ? this[this.length - 1]
          : this[this.length - 2];

      if (lastNumber.value.startsWith('(-'))
        lastNumber.value = lastNumber.value.slice(
          2,
          lastNumber.value.length - 1
        );
      else lastNumber.value = `(-${lastNumber.value})`;
    }
  }

  solve() {
    const expressionString = this.toString();
    const outputStringNumber = String(eval(expressionString));
    this.clear();
    this.append(
      outputStringNumber.startsWith('-')
        ? `(${outputStringNumber})`
        : outputStringNumber
    );
  }
}
