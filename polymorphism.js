// 4. Polymorphism - there can be different paths to reach the same destination
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Payment = /** @class */ (function () {
    function Payment() {
    }
    return Payment;
}());
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.pay = function () {
        console.log("please swipe the card");
    };
    return Card;
}(Payment));
var Cash = /** @class */ (function (_super) {
    __extends(Cash, _super);
    function Cash() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cash.prototype.pay = function () {
        console.log("please give coins");
    };
    return Cash;
}(Payment));
var creditCard = new Card();
var coins = new Cash();
creditCard.pay();
coins.pay();
