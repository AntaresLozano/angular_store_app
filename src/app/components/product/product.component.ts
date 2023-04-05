import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product = {
    id: '',
    title: 'Product name',
    price: 0,
    image: '../../../assets/images/default.png',
    description: '',
    category: ''
  }

  @Output() addedProduct = new EventEmitter<Product>()

  onAddToCart() {
    this.addedProduct.emit(this.product)
  }

}
