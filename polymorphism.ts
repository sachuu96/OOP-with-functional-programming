// 4. Polymorphism - there can be different paths to reach the same destination

abstract class Payment {
  abstract pay();
}

class Card extends Payment {
  pay() {
    console.log("please swipe the card");
  }
}

class Cash extends Payment {
  pay() {
    console.log("please give coins");
  }
}

const creditCard = new Card();
const coins = new Cash();
creditCard.pay();
coins.pay();
