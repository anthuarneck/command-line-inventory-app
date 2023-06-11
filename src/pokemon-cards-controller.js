const { nanoid } = require("nanoid");
const { faker } = require("@faker-js/faker");
const { chalk } = require("chalk");

function create(cards, cardName) {
  const card = {
    id: nanoid(4),
    name: cardName,
    priceInCents: faker.commerce.price({ min: 1.0, max: 25.0 }),
    inStock: "In Stock: " + faker.datatype.boolean(),
    holographic: "Holographic: " + faker.datatype.boolean(),
  };
  cards.push(card);
  return cards;
}

function index(cards) {
  return cards.map((card) => card.id + " " + card.name).join("\n");
}

function show(cards, cardId) {
  const foundCard = cards.find((card) => card.id === cardId);
  if (foundCard) {
    return foundCard.id + " " + foundCard.name + " " + foundCard.inStock;
  } else {
    console.log("Card with that ID cannot be found");
  }
}

function destroy(cards, cardId) {
  const index = cards.findIndex((card) => card.id === cardId);
  if (index >= 0) {
    cards.splice(index, 1);
    return cards;
  } else {
    console.log("Card with that ID cannot be found");
  }
}

function update(cards, cardId, updatedCard) {
  const index = cards.findIndex((card) => card.id === cardId);
  if (index > -1) {
    cards[index].id = cardId;
    cards[index].name = updatedCard;
    return cards;
  } else {
    console.log("Could not find a card with that ID");
  }
}

//filter function by holographic

module.exports = {
  create,
  index,
  show,
  destroy,
  update,
};
