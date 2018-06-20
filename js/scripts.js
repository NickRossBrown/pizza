function PizzaOrder(name, size, toppings, sauce, style){
  this.name = name;
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;
  this.style = style;
  // this.sizePrice = {personal:5,small:7,medium:10,large:14,Xlarge:21 }
  // this.stylePrice = {standard:0, thickcrust:2, thincrust:1.5, deepfried:3, pan:.75 }
  // this.saucePrice = {Standardtomatosauce: 0, extratomato:1,whitegarlic:2.5,bbq:1.25, hotSauce:3,noSauce:-2 }
  // this.toppingsPrice = {personal: 5, small : 7, medium :10,large :14, Xlarge :21}
  // this.sauce = sauce;
  // this.toppings = toppings
}
 PizzaOrder.prototype.findPrice = function (extra, extraPrice) {
   console.log(extra)
   console.log(extraPrice)
   console.log(extraPrice[extra])
   return extraPrice[extra]

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
  this.sizeCost  = {personal:5,small:7,medium:10,large:14,Xlarge:21 }
};
PizzaOrder.prototype.addSauceCost = function () {
  this.sauceCost  = {Standardtomatosauce: 0, extratomato:1,whitegarlic:2.5,bbq:1.25, hotSauce:3,noSauce:-2 }
};

PizzaOrder.prototype.addStyleCost = function () {
  this.styleCost  = {standard:0, thickcrust:2, thincrust:1.5, deepfried:3, pan:.75 }
};

PizzaOrder.prototype.addToppingsCost = function () {
  this.toppingsCost  =  {Cheeseonly:0, extracheese:2, pepproni:1.5, meatlovers:3, veggie:1, pineapple:-2}

};
// function findSizeCost(){
//   var pizza = new PizzaOrder ("NAME")
//   pizza.addSizeCost()
//   pizza.addCustomSize()
//   var total = 0
//   if (pizza.hasOwnProperty("size") !== null){
//     for (i=0; i < pizza.sizeCost.length ;i++){
//       if (pizza.size === pizza.sizeCost[i][0]){
//         total+=pizza.sizeCost[i][1]
//         return pizza.sizeCost[i][1]
//       }
//     }
//   } else{
//       return total
//     }
// }
//
// function findStyleCost(){
//   var pizza = new PizzaOrder ("NAME")
//   pizza.addStyleCost()
//   pizza.addCustomStyle();
//   var total = 0
//   if (pizza.hasOwnProperty("customStyle") !== null){
//     for (i=0; i < pizza.styleCost.length ;i++){
//       if (pizza.customStyle === pizza.styleCost[i][0]){
//         total+=pizza.styleCost[i][1]
//         return pizza.styleCost[i][1]
//       }
//     }
//   } else{
//       return total
//     }
// }
// function findSauceCost(){
//   var pizza = new PizzaOrder ("NAME")
//   pizza.addCustomSauceCost()
//   pizza.addCustomSauce();
//   var total = 0
//   if (pizza.hasOwnProperty("customToppings") !== null){
//     for (i=0; i < pizza.sauceCost.length ;i++){
//       if (pizza.customSauce === pizza.sauceCost[i][0]){
//         total+=pizza.sauceCost[i][1]
//         return pizza.sauceCost[i][1]
//       }
//     }
//   } else{
//       return total
//     }
// }
// function findToppingsCost(){
//   var pizza = new PizzaOrder ("NAME")
//   pizza.addToppingsCost();
//   pizza.addCustomToppings();
//   var total = 0;
//   if (pizza.hasOwnProperty("customToppings") !== null){
//     for (i=0; i < pizza.toppingsCost.length ;i++){
//       if (pizza.customToppings === pizza.toppingsCost[i][0]){
//         total+=pizza.toppingsCost[i][1];
//         return pizza.toppingsCost[i][1];
//       }
//     }
//   } else{
//       return total
//     }
// }

$(document).ready(function() {
  $("form.pizzaMenu").submit(function(event){
    event.preventDefault();
    var inputtedName = $("#inputName").val();
    var inputtedSize= $("#pizzaSize").val();
    var inputtedSauce = $("#pizzaSauce").val();
    var inputtedToppings = $("#pizzaToppings").val();
    var inputtedStyle = $("#pizzaStyle").val();

    var pizza = new PizzaOrder(inputtedName, inputtedSize,inputtedToppings, inputtedSauce, inputtedStyle)
    pizza.addSizeCost();
    pizza.addStyleCost();
    pizza.addSauceCost();
    pizza.addToppingsCost();
    console.log(pizza.sauceCost)
    // pizza.addCustomSauce()
    // pizza.addCustomToppings();
    // pizza.addCustomStyle();
    // pizza.addCustomSize()

    // pizza.addCustomStyle();
    console.log("saucecost------"+ pizza.sauceCost[pizza.sauce] + "      pizza size--"+pizza.sizeCost[pizza.size])

    var style = pizza.styleCost[pizza.style]
    var getStyleName = pizza.style
    var sauce = pizza.sauceCost[pizza.sauce]
    var topping = pizza.toppingsCost[pizza.toppings]
    var size = pizza.sizeCost[pizza.size]
    var totalPrice = style + sauce + topping + size
    console.log(getStyleName+"-----style---"+style+ "sauce---"+sauce+ "topping---"+topping+ "size---"+size)

    // var sauceTotal = pizza.findPrice(pizza.sauce,pizza.saucePrice);



    // getPizzaPrice(pizza.size)




    $("#receipt").show();
    $("#submitButton").hide();
    $(".custom").append("<h4 class='custom'>" +"Thank you  "+ pizza.name + "</h4>"+"<p>" + pizza.style +"<span class='moveRight'>"+ style+ "</span></p>" +"<p>"+ pizza.size +"<span class='moveRight'>"+ size +"</span></p>"+"<p>" + pizza.toppings +"<span class='moveRight'>"+ topping + "</span></p>" +"<p>"+ pizza.sauce+"<span class='moveRight'>"+sauce+ "</span></p>"+"<p>"+ "Total"+"<span class='moveRight'>"+totalPrice+ "</span></p>")
    // $(".custom").append("<p>" + pizza.customStyle + "</p>")
    $(".restartWebpage").click(function() {
    location.reload();
    })

  });
});
