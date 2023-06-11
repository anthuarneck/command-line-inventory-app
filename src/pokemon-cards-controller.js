const { nanoid } = require("nanoid");
const { faker } = require("@faker-js/faker");

function create(cards, cardName) {
  const card = {
    id: nanoid(4),
    name: cardName,
    priceInCents: faker.commerce.price({ min: 250, max: 2500, dec: 0 }),
    inStock: "In Stock: " + faker.datatype.boolean(),
    holographic: "Holographic: " + faker.datatype.boolean(),
  };
  if (cardName) {
    cards.push(card);
    console.log("Creating new card");
    return cards;
  } else {
    console.log("Error: Try adding name.");
    return cards;
  }
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
    return cards;
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
    return cards;
  }
}

// function returns cards that are holographic.
function getHolographics(cards) {
  let holographicCards = cards.filter(
    (card) => card.holographic === "Holographic: true"
  );
  if (holographicCards) {
    return holographicCards.map((card) => card.id + " " + card.name).join("\n");
  } else {
    console.log("No holographic cards currently available.");
  }
}

module.exports = {
  create,
  index,
  show,
  destroy,
  update,
  getHolographics,
};
