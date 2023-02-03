//Create a new button object
var button = new UI.Button("Shop");

//Set button properties
button.x = 20;
button.y = 20;
button.width = 100;
button.height = 50;

//Add event listener for when the button is clicked
button.on("click", function() {
    //Open the shop UI
    UI.open("Shop");
});

//Add the button to the game screen
UI.add(button);

//Create a new UI window for the shop
var shop = new UI.Window("Shop");

//Set the shop window properties
shop.width = 500;
shop.height = 500;

//Add items to the shop
var item1 = new UI.Item("Sword", 50);
var item2 = new UI.Item("Shield", 100);
var item3 = new UI.Item("Helmet", 150);

shop.addItem(item1);
shop.addItem(item2);
shop.addItem(item3);

//Add the shop window to the game
UI.add(shop);
