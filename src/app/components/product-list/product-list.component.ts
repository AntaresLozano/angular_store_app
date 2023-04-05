import { Component, OnInit } from '@angular/core';
import { Product } from '../../models';
import { StoreService } from '../../services'
import { ProductsService } from '../../services'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  myShoppingCart: Product[] = []
  totalPrice: number = 0;
  products: Product[] = []

  today = new Date();

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getMyShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
      .subscribe(data => {
        // console.log(data)
        this.products = data;
      })
  }



  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product)
    this.totalPrice = this.storeService.getTotal()
  }



}
