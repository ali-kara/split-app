import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { DatePipe } from '@angular/common';
import { DepoGiris } from '../models/DepoGiris';

@Component({
  selector: 'app-sold-item-screen',
  templateUrl: './sold-item-screen.component.html',
  styleUrls: ['./sold-item-screen.component.css'],
})
export class SoldItemScreenComponent implements OnInit, OnDestroy {
  depoGiris: DepoGiris[] | undefined;
  loading: boolean = false;
  filterText: string = '';

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params) => {
    //   if (params['categoryId']) {
    //     this.getProductsByCategory(params['categoryId']);
    //   } else {
    //     this.getProducts();
    //   }
    // });
  }

  getProducts() {
    this.loading = true;
    this.productService.getProducts().subscribe(
      (response) => {
        this.products = response;
        this.loading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getProductsByCategory(categoryId: number) {
    this.loading = true;
    this.productService.getProductsByCategory(categoryId).subscribe(
      (response) => {
        this.products = response;
        this.loading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.toastrService.success('Sepete eklendi', product.name);
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
