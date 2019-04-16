/* var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
// 运行js的时候报错，this指向都得window
console.log("card: " + pickedCard.card + " of " + pickedCard.suit); */

var deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function () {
      return ()=> {
          var pickedCard = Math.floor(Math.random() * 52);
          var pickedSuit = Math.floor(pickedCard / 13);
          return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
      };
  }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
//card: 4 of spades
// 给编译器设置了--noImplicitThis,就会报错
// 解决办法： 提供一个显示的this参数，出现在列表参数的最前面
/**
 * 
 * function f(this: type) {
    // make sure `this` is unusable in this standalone function
  }
 */
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

/**
 * this参数在回调函数中
 * 
 */



