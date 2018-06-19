function PizzaOrder(name,sauce){
  this.name = name;
  this.sauce = {Standardtomatosauce: 0, extratomato:1,whitegarlic:2.5,bbq:1.25, hotSauce:3,noSauce:-2 }
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

var toppings = {
  personal: 5,
  small : 7,
  medium :10,
  large :14,
  Xlarge :21
}

PizzaOrder.prototype.addSizeCost = function () {
  this.sizeCost  = [["personal",5],["small",7],["medium",10],["large",14],["Xlarge",21]]

};
PizzaOrder.prototype.addCustomSauceCost = function () {
  this.sauceCost  = [["Standard tomato sauce",0],["extra tomato",1],["white garlic",2.5],["bbq",1.25],["hot sauce",3]["no sauce",-2]]
};

PizzaOrder.prototype.addStyleCost = function () {
  this.styleCost  = [["standard",0],["thick crust",2],["Thin crust",1.5],["deep fried",3],["Pan",.75]]
};

PizzaOrder.prototype.addToppingsCost = function () {
  this.toppingsCost  = [["Cheese only",0],["extra cheese",2],["pepproni",1.5],["meat lovers",3]["veggie",1]["pineapple",-2]]
};

function findSizeCost(){
  var pizza = new PizzaOrder ("NAME")
  pizza.addSizeCost()
  pizza.addCustomSize()

  console.log(pizza.sizeCost+"WWWWWWWWWW"+pizza.size)
  var total = 0
  if (pizza.hasOwnProperty("size") !== null){
    for (i=0; i < pizza.sizeCost.length ;i++){
      if (pizza.size === pizza.sizeCost[i][0]){
        console.log(pizza.sizeCost[i][1]+"123212312312")
        total+=pizza.sizeCost[i][1]
        return pizza.sizeCost[i][1]
      }
    }
  } else{
      return total
    }
}

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
    for (i=0; i < pizza.sauceCost.length ;i++){
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
  pizza.addToppingsCost();
  pizza.addCustomToppings();
    // this.customToppings = $("#pizzaToppings").val();
    // this.toppingsCost  = [["Cheese only",0],["extra cheese",2],[
  var total = 0;
  console.log(pizza.toppingsCost+"WWWWWWWWWW"+pizza.customToppings);
  if (pizza.hasOwnProperty("customToppings") !== null){
    for (i=0; i < pizza.toppingsCost.length ;i++){
      if (pizza.customToppings === pizza.toppingsCost[i][0]){
        total+=pizza.toppingsCost[i][1];
        return pizza.toppingsCost[i][1];
      }
    }
  } else{
      return total
    }
}

$(document).ready(function() {
  $("form.pizzaMenu").submit(function(event){
    event.preventDefault();
    var inputtedName = $("#inputName").val();
    var inputtedSize= $("#pizzaSize").val();
    var inputtedSauce = $("#pizzaSauce").val();
    var inputtedToppings = $("#pizzaToppings").val();
    var inputtedStyle = $("#pizzaStyle").val();

    var pizza = new PizzaOrder(inputtedName)
    pizza.addCustomSauce()
    pizza.addCustomToppings();
    pizza.addCustomStyle();
    pizza.addCustomSize()
    // pizza.addCustomStyle();

    var style = findStyleCost();
    var sauce = findSauceCost()
    var size = findSizeCost();
    var topping = findToppingsCost();



    console.log(pizza)
    // getPizzaPrice(pizza.size)


    console.log(inputtedName + inputtedSize + inputtedSauce + inputtedToppings + inputtedStyle)


    $("#receipt").show();
    $(".custom").append("<h4 class='custom'>" +"Thank you  "+ pizza.name + "</h4>"+"<p>" + pizza.customStyle +"<span class='moveRight'>"+ style+ "</span></p>" +"<p>"+ pizza.size +"<span class='moveRight'>"+ size +"</span></p>"+"<p>" + pizza.customToppings +"<span class='moveRight'>"+ topping+ "</span></p>" +"<p>"+ pizza.customSauce+"<span class='moveRight'>"+sauce+ "</span></p>")
    // $(".custom").append("<p>" + pizza.customStyle + "</p>")

  });
});
