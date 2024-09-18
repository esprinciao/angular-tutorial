import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  products: Product[] = [];

  constructor() {
    this.products[0] = new Product('s101', 'Tata', 'Dish TV', 10, 2500);
    this.products[1] = new Product('k293', 'Wipro', 'Bulbs', 20, 3000);
    this.products[2] = new Product('p410', 'Sony', 'Smart TV', 5, 4000);
    this.products[3] = new Product('l012', 'Samsung', 'Purfier', 15, 12000);
    this.products[4] = new Product('m822', 'LG', 'Refrigerator', 8, 15000);
    this.products[5] = new Product('n054', 'Apple', 'iPhone', 30, 70000);
    this.products[6] = new Product('o675', 'Dell', 'Laptop', 7, 50000);
    this.products[7] = new Product('q399', 'HP', 'Printer', 12, 8000);
    this.products[8] = new Product('r245', 'Panasonic', 'Microwave', 25, 5000);
    this.products[9] = new Product('t480', 'Lenovo', 'Tablet', 18, 22000);

    this.products[10] = new Product('o99', 'Samsung', 'Laptop', 7, 50000);
    this.products[11] = new Product('qp11', 'Samsung', 'Printer', 12, 8000);
    this.products[12] = new Product('r776', 'Panasonic', 'Tablet', 25, 5000);
    this.products[13] = new Product('tt22', 'Dell', 'Tablet', 18, 22000);
  }

  getProducts(): Product[] {
    return this.products;
  }
}
