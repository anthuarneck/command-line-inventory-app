const { writeJSONFile, readJSONFile } = require("./helpers");

function getCart() {
  const cartCards = readJSONFile("./data", "cart-data.json");
  return cartCards;
}

function addToCart(cards, cardId, cardQuantity) {
  const foundCard = cards.find((card) => card.id === cardId);
  let cartedCards = getCart();
  if (foundCard && foundCard.inStock === "In Stock: true") {
    const potentialCard = {
      name: foundCard.name,
      quantity: cardQuantity,
      total: foundCard.priceInCents * cardQuantity,
    };
    cartedCards.push(potentialCard);
    return cartedCards;
  } else if (foundCard.inStock === "In Stock: false") {
    console.log("Card is no longer in stock.");
  }
}

function showCart(cart) {
  let grandTotal = 0;
  let newCart = cart
    .map(
      (card) => card.quantity + " " + card.name + " cards, Total: " + card.total
    )
    .join("\n");
  for (let card of cart) {
    grandTotal += card.total;
  }
  return newCart + "\n" + "--------" + "\n" + "Grand Total: " + grandTotal;
}

function emptyCart(cart) {
  console.log("Cart emptied.");
  return [];
}

module.exports = {
  addToCart,
  showCart,
  emptyCart,
};
