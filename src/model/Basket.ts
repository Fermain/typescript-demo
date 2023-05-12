import { Product } from ".";

export default class Basket {
  constructor(public contents = new Array<Product>(), private testMode = false) {}

  add(product: Product) {
    this.contents.push(product)
  }

  remove(product: Product) {
    const indexToRemove = this.contents.findIndex(p => p.title === product.title)
    this.contents = this.contents.splice(indexToRemove, 1)
  }
}
