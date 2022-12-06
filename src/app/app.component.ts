import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'pipes';
  name: string = '';
  paymentDate: string = '';
  amount: number = 0;
  height: number = 0;
  miles: unknown;

  car = {
    make: 'Toyota',
    model: 'camry',
    year: 2000,
  };

  onMilesChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const parseVal = parseFloat(target.value);

    if (typeof parseVal === 'number') {
      this.miles = parseVal;
    }
    console.log('parseVal:>>', parseVal);
  }

  onHeightChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.height = parseFloat(target.value);
  }

  onNameChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.name = target.value;
  }

  onDateChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.paymentDate = target.value;
  }

  onAmountChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.amount = parseFloat(target.value);
  }
}
