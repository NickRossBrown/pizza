function PizzaOrder(name){
  this.name = name;
  // this.sauce = sauce;
  // this.toppings = toppings
}
PizzaOrder.prototype.addCustomSize = function () {
  this.size = $("#pizzaSize").val();
}

PizzaOrder.prototype.addCustomSauce = function () {
  this.customSauce = $("#pizzaSauce").val();

};

PizzaOrder.prototype.addCustomToppings = function () {
  this.customToppings = $("#pizzaToppings").val();

};

PizzaOrder.prototype.addCustomStyle = function () {
  this.customStyle = $("#pizzaStyle").val();

};

PizzaOrder.prototype.addSizeCost = function () {
  this.toppingsCost  = [["personal",5],["small",7],["medium",10],["large",14],["Xlarge",21]]

};
PizzaOrder.prototype.addCustomSauceCost = function () {
  this.sauceCost  = [["Standard tomato sauce",0],["extra tomato",1],["white garlic",2.5],["bbq",1.25],["hot sauce",3]["no sauce",-2]]
};

PizzaOrder.prototype.addStyleCost = function () {
  this.styleCost  = [["standard",0],["thick crust",2],["Thin crust",1.5],["deep fried",3]]
};
// Pizza.porototype.itemsCost = function () {
//   this.itemsCost = {small:
//
//   }
//
// }
//
// function findSizeCost(){
//   var pizza = new PizzaOrder ("NAME")
//   pizza.addCustomSize()
//   pizza.addCost()
//   pizza.addCustomSauce()
//   pizza.addCustomToppings();
//   pizza.addCustomStyle();
//
//   console.log("WWWWWWWWWW"+pizza.itemCost)
//   var total = 0
//   if (pizza.hasOwnProperty("size") !== null){
//     for (i=0; i < pizza.itemCost.length ;i++){
//       if (pizza.size === pizza.itemCost[i][0]){
//         console.log(pizza.itemCost[i][1]+"123212312312")
//         total+=pizza.itemCost[i][1]
//         return pizza.itemCost[i][1]
//       }
//     }
//   } else{
//       return total
//     }
// }

function findStyleCost(){
  var pizza = new PizzaOrder ("NAME")
  pizza.addStyleCost()
  pizza.addCustomStyle();
  var total = 0
  console.log(pizza.styleCost+"WWWWWWWWWW"+pizza.customStyle)
  if (pizza.hasOwnProperty("customStyle") !== null){
    for (i=0; i < pizza.styleCost.length ;i++){
      if (pizza.customStyle === pizza.styleCost[i][0]){
        total+=pizza.styleCost[i][1]
        return pizza.styleCost[i][1]
      }
    }
  } else{
      return total
    }
}
function findSauceCost(){
  var pizza = new PizzaOrder ("NAME")
  pizza.addCustomSauceCost()
  pizza.addCustomSauce();
  var total = 0
  if (pizza.hasOwnProperty("customToppings") !== null){
    for (i=0; i < pizza.customSauceCost.length ;i++){
      if (pizza.customSauce === pizza.sauceCost[i][0]){
        total+=pizza.sauceCost[i][1]
        return pizza.sauceCost[i][1]
      }
    }
  } else{
      return total
    }
}
function findToppingsCost(){
  var pizza = new PizzaOrder ("NAME")
  pizza.addToppingsCost()
  pizza.addCustomToppings();
  var total = 0
  console.log("WWWWWWWWWW"+pizza.customToppings)
  if (pizza.hasOwnProperty("customToppings") !== null){
    for (i=0; i < pizza.toppingsCost.length ;i++){
      if (pizza.customToppings === pizza.toppingsCost[i][0]){
        total+=pizza.toppingsCost[i][1]
        return pizza.toppingsCost[i][1]
      }
    }
  } else{
      return total
    }
}

//
// function getPizzaPrice(item){
//   if (pizza.hasOwnProperty("item") !== null){
//     for (i=0; i < itemsCost.length ;i++){
//       if (pizza.item === itemsCost[i][0]){
//         console.log(itemsCost[i][1]+"123212312312")
//         totalPrice+=itemsCost[i][1]
//         return itemsCost[i][1]
//       }
//     }
//   }
// }

$(document).ready(function() {
  $("form.pizzaMenu").submit(function(event){
    event.preventDefault();
    var inputtedName = $("#inputName").val();
    var inputtedSize= $("#pizzaSize").val();
    var inputtedSauce = $("#pizzaSauce").val();
    var inputtedToppings = $("#pizzaToppings").val();
    var inputtedStyle = $("#pizzaStyle").val();

    var pizza = new PizzaOrder(inputtedName,inputtedSize)
    pizza.addCustomSauce()
    pizza.addCustomToppings();
    pizza.addCustomStyle();
    findStyleCost();


    console.log(pizza)
    // getPizzaPrice(pizza.size)


    console.log(inputtedName + inputtedSize + inputtedSauce + inputtedToppings + inputtedStyle)


    $("#receipt").show();
    $(".custom").append("<li class='custom'>" + pizza.size + "</l1>")

  });
});
