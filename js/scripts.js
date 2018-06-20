function PizzaOrder(name, size, toppings, sauce, style){
  this.name = name;
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;
  this.style = style;
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

    console.log("saucecost------"+ pizza.sauceCost[pizza.sauce] + "      pizza size--"+pizza.sizeCost[pizza.size])

    var style = pizza.styleCost[pizza.style]
    var getStyleName = pizza.style
    var sauce = pizza.sauceCost[pizza.sauce]
    var topping = pizza.toppingsCost[pizza.toppings]
    var size = pizza.sizeCost[pizza.size]
    var totalPrice = style + sauce + topping + size
    console.log(getStyleName+"-----style---"+style+ "sauce---"+sauce+ "topping---"+topping+ "size---"+size)

    $("#receipt").show();
    $("#submitButton").hide();
    $(".custom").append("<h4 class='custom'>" +"Thank you  "+ pizza.name + "</h4>"+"<p>" + pizza.style +"<span class='moveRight'>"+ style+ "</span></p>" +"<p>"+ pizza.size +"<span class='moveRight'>"+ size +"</span></p>"+"<p>" + pizza.toppings +"<span class='moveRight'>"+ topping + "</span></p>" +"<p>"+ pizza.sauce+"<span class='moveRight'>"+sauce+ "</span></p>"+"<p>"+ "Total"+"<span class='moveRight'>"+totalPrice+ "</span></p>")
    // $(".custom").append("<p>" + pizza.customStyle + "</p>")
    $(".restartWebpage").click(function() {
    location.reload();
    })

  });
});
