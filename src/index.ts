interface Fruit {
  name: string;
  shape: FruitShapes;
  price: number;
}

enum FruitShapes {
  ROUND,
  SPIKY,
  BULBOUS
}

const example: Fruit = {
  name: 'apple',
  shape: FruitShapes.ROUND,
  price: 123
}

const fruitBasket: Array<Fruit> = [];

fruitBasket.push(example)

fruitBasket.push({
  name: "pineapple",
  shape: FruitShapes.SPIKY,
  price: 111
})

console.log(1);
