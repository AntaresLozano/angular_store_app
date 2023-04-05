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
  totalPrice = 0;
  products: Product[] = []
  today = new Date();

  showProductDetail = false
  productChosen: Product = {
    id: '',
    title: 'Product name',
    price: 0,
    images: ['../../../assets/images/default.png'],
    description: '',
    category: { id: '', name: '' }
  }
  currentSlideIndex = 0;

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

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowProductDetail(id: string) {
    this.productsService.getProduct(id)
      .subscribe(data => {
        this.toggleProductDetail()
        this.productChosen = data;
      })
  }


  prevSlide() {
    if (this.currentSlideIndex === 0) {
      this.currentSlideIndex = this.productChosen.images.length - 1;
    } else {
      this.currentSlideIndex--;
    }
  }

  nextSlide() {
    if (this.currentSlideIndex === this.productChosen.images.length - 1) {
      this.currentSlideIndex = 0;
    } else {
      this.currentSlideIndex++;
    }
  }

  
}
