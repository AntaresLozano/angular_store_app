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
    images: ['../../../assets/images/default.png'],
    description: '',
    category: { id: '', name: '' }
  }

  @Output() addedProduct = new EventEmitter<Product>()
  @Output() showProduct = new EventEmitter<string>()

  onAddToCart() {
    this.addedProduct.emit(this.product)
  }

  onShowDetail() {
    this.showProduct.emit(this.product.id)
  }

}
