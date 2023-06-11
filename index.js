const { writeJSONFile, readJSONFile } = require("./src/helpers");
const {
  create,
  index,
  show,
  destroy,
  update,
  getHolographics,
} = require("./src/pokemon-cards-controller");
const {
  addToCart,
  showCart,
  emptyCart,
} = require("./src/user-cart-controller");

const run = () => {
  const action = process.argv[2];
  const card = process.argv[3];
  let cardsData = readJSONFile(".", "data/pokemon-cards-data.json");
  let cartData = readJSONFile(".", "data/cart-data.json");
  let writeToFile = false;
  let updatedCardsData = [];
  let updatedCartData = [];
  switch (action) {
    case "index":
      const allCards = index(cardsData);
      console.log(allCards);
      break;
    case "create":
      console.log("Creating new card");
      updatedCardsData = create(cardsData, card);
      writeToFile = true;
      break;
    case "show":
      const foundCard = show(cardsData, card);
      console.log(foundCard);
      break;
    case "update":
      console.log(card, "Updating...");
      updatedCardsData = update(cardsData, card, process.argv[4]);
      writeToFile = true;
      break;
    case "destroy":
      updatedCardsData = destroy(cardsData, card);
      writeToFile = true;
      break;
    case "getHolographics":
      const foundCards = getHolographics(cardsData);
      console.log(foundCards);
      break;
    case "addToCart":
      updatedCartData = addToCart(cardsData, card, process.argv[4]);
      writeToFile = true;
      break;
    case "showCart":
      const cartedCards = showCart(cartData);
      console.log(cartedCards);
      break;
    case "emptyCart":
      updatedCartData = emptyCart(cartData);
      writeToFile = true;
      break;
    default:
      console.log("Error detected");
  }
  if ((writeToFile && action === "addToCart") || action === "emptyCart") {
    console.log("New data detected - Updating Cart...");
    writeJSONFile(".", "data/cart-data.json", updatedCartData);
  } else {
    if (writeToFile) {
      console.log("New data detected - Updating DataFile...");
      writeJSONFile(".", "data/pokemon-cards-data.json", updatedCardsData);
    }
  }
};
run();
