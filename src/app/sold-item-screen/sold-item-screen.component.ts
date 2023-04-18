import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { DatePipe } from '@angular/common';
import { DepoGiris } from '../models/DepoGiris';
import { DepoGirisService } from '../services/DepoGirisService';

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

  constructor(private depoGirisService : DepoGirisService){

  }

  getItemsList() {
    this.loading = true;
    this.depoGirisService.getDepoGiris.subscribe(
      (response) => {
        this.depoGiris = response;
        this.loading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // getProductsByCategory(categoryId: number) {
  //   this.loading = true;
  //   this.productService.getProductsByCategory(categoryId).subscribe(
  //     (response) => {
  //       this.products = response;
  //       this.loading = false;
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
 

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
