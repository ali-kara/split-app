import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { DepoGiris } from '../../models/DepoGiris';
import { DepoGirisService } from 'src/app/api/DepoGirisService';
import { BaseService } from 'src/app/api/BaseService';

@Component({
  standalone: false,
selector: 'app-sold-item-screen',
  templateUrl: './sold-item-screen.component.html',
  styleUrls: ['./sold-item-screen.component.css'],
})
export class SoldItemScreenComponent extends BaseService implements OnInit {
  depoGiris: DepoGiris[] | undefined;
  filterText: string = '';
  isPressed: boolean = false;

  constructor(private depoGirisService: DepoGirisService) {
    super();
  }

  @HostListener('window:keyup', ['$event'])
  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.type == 'keyup') {
      this.isPressed = false;
      //this.notify.showError(event.key, 'Tuşa Kaldırıldı');
    } else {
      if (event.key == KEY_CODE.SOLD_KEY.toUpperCase()) {
        if (!this.isPressed) {
          this.isPressed = true;
          this.toastr.showSuccess('', 'Tuşa Basıldı');
        }
      }
    }
  }

  ngOnInit(): void {
    this.getItemList();

    // this.activatedRoute.params.subscribe((params) => {
    //   if (params['categoryId']) {
    //     this.getProductsByCategory(params['categoryId']);
    //   } else {
    //     this.getProducts();
    //   }
    // });
  }

  getItemList() {
    this.isLoading = true;
    this.depoGirisService.getDepoGiris().subscribe(
      (response) => {
        this.depoGiris = response;
        this.isLoading = false;
      },
      async (error) => {
        await this.delay(10000);
        this.getItemList();
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

  // addToCart(product: Product) {
  //   this.cartService.addToCart(product);
  //   this.toastrService.success('Sepete eklendi', product.name);
  // }
}

export enum KEY_CODE {
  SOLD_KEY = 'Q',
  DOWN_ARROW = 40,
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
}

