import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { DepoGiris } from '../models/DepoGiris';
import { NotificationService } from '../services/NotificationService';

@Component({
  selector: 'app-sold-item-screen',
  templateUrl: './sold-item-screen.component.html',
  styleUrls: ['./sold-item-screen.component.css'],
})
export class SoldItemScreenComponent implements OnInit {
  depoGiris: DepoGiris[] | undefined;
  loading: boolean = false;
  filterText: string = '';
  isPressed: boolean = false;

  constructor(private notify: NotificationService) {}

  @HostListener('window:keyup', ['$event'])
  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.type == 'keyup') {
      this.isPressed = false;
      this.notify.showError(event.key, 'Tuşa Kaldırıldı');
    } else {
      if (event.key == KEY_CODE.SOLD_KEY) {
        if (!this.isPressed) {
          this.isPressed = true;
          this.notify.showSuccess(event.key, 'Tuşa Basıldı');
                    
          console.log(event);
        }
      }
    }
  }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params) => {
    //   if (params['categoryId']) {
    //     this.getProductsByCategory(params['categoryId']);
    //   } else {
    //     this.getProducts();
    //   }
    // });
  }

  // getProducts() {
  //   this.loading = true;
  //   this.productService.getProducts().subscribe(
  //     (response) => {
  //       this.products = response;
  //       this.loading = false;
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

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
  SOLD_KEY = 'w',
  DOWN_ARROW = 40,
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
}
