import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'myapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Prince';
  location = 'Trivandrum';
  company = 'UST';
  productId = 1239;
  description = ' One Plus Nord';
  qty = 200;
  available = this.qty > 0;

  

  Instock = this.available;
  orderqty = 0;

  orderDate: Date = new Date();

  isorderedQtyAvailable = this.orderqty < this.qty ? true : false;

  deliverColor = 'red';

  serviceTimings = ' Open from 9 am to 6 pm.';

  products = [
    { productId: '1234', description: 'Mobile', price: 7500 },
    { productId: '567', description: 'Laptop', price: 10000 },
    { productId: '103', description: 'TV', price: 5359 },
    { productId: '143', description: 'Shoe', price: 5843 },
    { productId: '038', description: 'Car', price: 9479 },
  ];

  printOrder(inputqty: any): void {
    console.log(inputqty, 'order placed');
    if (inputqty >= 200) {
      this.deliverColor = 'red';
    } else {
      this.deliverColor = 'green';
    }
  }

  

  setGColor(): void {
    this.deliverColor = 'green';
  }

  setRColor(): void {
    this.deliverColor = 'red';
  }
}
