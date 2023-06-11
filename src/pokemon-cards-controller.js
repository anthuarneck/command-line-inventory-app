const { nanoid } = require("nanoid");
const { faker } = require("@faker-js/faker");
const { chalk } = require("chalk");

function create(cards, cardName) {
    const card = {
        name: cardName,
        priceInCents: faker.commerce.price({ min: 1.00, max: 25.00, dec: 2 }),
        inStock: faker.datatype.boolean(),
        holographic: faker.datatype.boolean(),
    }
    cards.push(card)
    return cards
}

