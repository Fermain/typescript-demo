import { Product, ProductTypes } from './model';
import Basket from './model/Basket';
import './style.css'

const pineapple: Product = {
  title: "pineapple",
  description: "spikes, watch out",
  onSale: false,
  price: 1010,
  tags: [],
  type: ProductTypes.physical,
}

const basket = new Basket([], true)

basket.add(pineapple)

console.log(basket.contents);

basket.remove(pineapple)

console.log(basket.contents);