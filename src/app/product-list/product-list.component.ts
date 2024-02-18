import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductListService } from '../shared/services/product-list.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  private _productService;

  constructor(
    private productService: ProductListService,
    private router: Router
  ) {
    this._productService = productService;
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.productService.getProductsList().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  pageTitle: string = 'Product List';
  showImage: boolean = false;
  sub!: Subscription;
  private _listFilter: string = '';
  errorMessage: string = '';

  filteredProducts: IProduct[] = [];

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter', value);
    this.filteredProducts = this.performFilter(value);
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLowerCase().includes(filterBy)
    );
  }

  products: IProduct[] = [];

  products1: any[] = [
    {
      name: 'Ali',
      surname: 'Balospura',
    },
    {
      name: 'akshay',
      surname: 'Patel',
    },
    {
      name: 'Priyanshu1',
      surname: 'Patel',
    },
    {
      name: 'Priyanshu2',
      surname: 'Patel',
    },
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List' + message;
  }

  onProductClicked(productId: number): void {
    this.router.navigate(['/products', productId]);
  }
}
