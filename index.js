const { writeJSONFile, readJSONFile } = require("./src/helpers");
const {
  create,
  index,
  show,
  destroy,
  update,
} = require("./src/pokemon-cards-controller");

const run = () => {
  const action = process.argv[2];
  const card = process.argv[3];
  let cardsData = readJSONFile(".", "data/pokemon-cards-data.json");
  let writeToFile = false;
  let updatedCardsData = [];
  switch (action) {
    case "index":
      const allCards = index(cardsData);
      console.log(allCards);
      break;
    case "create":
      console.log("Creating receipt for new card purchase");
      updatedCardsData = create(cardsData, card);
      writeToFile = true;
      break;
    case "show":
      const foundCard = show(cardsData, card);
      console.log(foundCard);
      break;

    case "update":
      console.log(card, "updating...");
      updatedCardsData = update(cardsData, card, process.argv[4]);
      writeToFile = true;
      break;

    case "destroy":
      updatedCardsData = destroy(cardsData, card);
      writeToFile = true;
      break;
    default:
      console.log("error detected");
  }

  if (writeToFile) {
    console.log("new data detected - updating...");

    writeJSONFile(".", "data/pokemon-cards-data.json", updatedCardsData);
  }
};
run();
