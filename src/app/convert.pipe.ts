import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    // console.log('value: >>', value);
    if (value === 0) return value;
    if (!value) return '';
    // if (typeof value === 'number') {
    console.log('args: >> ', args);

    const unit = args[0];
    const maxFractionDigits = args[1];

    switch (unit) {
      case 'km':
        value = value * 1.60934;
        break;
      case 'm':
        value = value * 1.60934 * 1000;
        break;
      case 'cm':
        value = value * 1.60934 * 1000 * 100;
        break;
      default:
        throw new Error('Target unit not supported');
    }

    //custom 顯示小數點幾位數內
    if (typeof maxFractionDigits === 'number') {
      // console.log(value.toString().split('.'));
      const valueSplitArr = value.toString().split('.');
      if (valueSplitArr[1]) {
        return (
          valueSplitArr[0] +
          '.' +
          valueSplitArr[1].substring(0, maxFractionDigits)
        );
      }
    }
    return value;
  }
}
