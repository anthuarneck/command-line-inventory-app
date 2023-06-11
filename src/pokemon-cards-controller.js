const { nanoid } = require("nanoid");
const { faker } = require("@faker-js/faker");
const { chalk } = require("chalk");

function create(cards, cardName) {
    const card = {
        id: nanoid(4),
        name: cardName,
        priceInCents: faker.commerce.price({ min: 1.00, max: 25.00, dec: 2 }),
        inStock: faker.datatype.boolean(),
        holographic: faker.datatype.boolean(),
    }
    cards.push(card)
    return cards
}

function index(cards) {
    return cards.map((card) => card.id + " " + card.name).join("\n")
}

function show(cards, cardId) {
    const foundCard = cards.find((card) => card.id === cardId);

    return foundCard.id + " " + foundCard.name
}

function destroy(cards, cardId) {
    const index = cards.findIndex((card) => card.id === cardId);
    if (index >= 0) {
        cards.splice(index, 1);
        return cards
    } else {
        console.log("card with that ID cannot be found")
    }
}

function update (cards, cardId, updatedCard) {
    const index = cards.findIndex((card) => card.id === cardId);

    if (index > -1) {
        cards[index].id = cardId;
        cards[index].name = updatedCard;
        cards[index].priceInCents = cardPriceInCents[updatedCard];
        return cards
    } else {
        console.log("Could not find a card with that ID")
    }
}