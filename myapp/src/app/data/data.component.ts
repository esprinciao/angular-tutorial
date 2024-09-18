import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent {
  productData: Product[] = [];

  constructor(private service: DataService) {
    this.productData = service.getProducts();
    console.log(this.productData);
  }

  selectedBrand: string = '';

  filteredProducts = this.productData;

  filteredProducts2 = this.productData;

  onSubmitBrand(): void {
    if (this.selectedBrand === 'All') {
      this.filteredProducts = this.productData;
    } else {
      this.filteredProducts = this.productData.filter(
        (product) => product.brand === this.selectedBrand
      );
    }
  }

  minPrice: number = 0;
  maxPrice: number = 0;

  totalProductsCount: number = this.productData.length;

  filteredProductsCount: number = this.filteredProducts2.length;

  onSubmitPrice() {
    this.filteredProducts2 = this.productData.filter((product) => {
      const isWithinMinPrice =
        this.minPrice === null || product.price >= this.minPrice;
      const isWithinMaxPrice =
        this.maxPrice === null || product.price <= this.maxPrice;

      return isWithinMinPrice && isWithinMaxPrice;
    });

    this.filteredProductsCount = this.filteredProducts2.length;
  }
}
