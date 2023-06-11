# command-line-inventory-app

This app allows user to manipulate data file with CRUD logic. It also gives user the ability to manipulate items in a cart file. This app mimics a card shop that sells Pokemon Cards.

## Inventory Setup

- User can start by "creating" cards for pokemon-cards-data.json file (our inventory).
  - (ex. node index.js create Pikachu) on command line.
    - By adding a "card name" after "create", a brand new pokemon card (object) with various key-value pairs will be created and added to our pokemon-cards-data.json file.
- User has the ability to check current inventory of pokemon-cards-data.json file by running the "index" action.
    (ex. node index.js index)
- User can "show" a specific card with "show" command and adding a card "id" afterwards.
    (ex. node index.js show rvTy)
  - This will return the card "id" along with card "name".
- User can "update" a cardname to another user inputter cardname.
    (ex. node index.js update y6Yp Pichu)
  - This example will change the cardname from "Pikachu" to "Pichu".
- User has the ability to "destroy" a card currently in inventory.
  - (ex. node index.js destroy y6Yp)
    - This command will fully remove card object from inventory.
- User has the ability to return all Pokemon Card objects that have a truthy value in "Holographic" key.
    (ex. node index.js getHolographics)

## Cart Setup

User will have full control over adding product to a cart, along with emptying cart & veiwing cart details from command line. (cart-data.json)

- User can "add" a card, or many cards, to cart. This will plug new cards into cart-data.json file.
    (ex. node index.js addToCart F11b 3)
  - Inserting a card ID followed by a number parameter will add that many cards of that specific ID to cart.
    - Pokemon Card objects in cart will show total price in cents along with quantity of said card in cart.
- User can view all cards in cart, along with total price for each unique card along with grand total of all cards in cart.
    (ex. node index.js showCart)
- User can completely "empty" cart. This will remove all Pokemon card objects from cart file.
    (ex. node index.js emptyCart)
