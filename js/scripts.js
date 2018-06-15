function PizzaOrder(name,size){
  this.name = name;
  this.size = size;
  // this.sauce = sauce;
  // this.toppings = toppings
}

PizzaOrder.prototype.addCustomSauce = function () {
  this.customSauce = "customSauce"

};

PizzaOrder.prototype.addCustomToppings = function () {
  this.customSauce = "customSauce"

};

PizzaOrder.prototype.addCustomStyle = function () {
  this.customSauce = "customSauce"

};

var itemsCost = [["personal",5],["small",7],["medium",10],["large",14],["Xlarge",21]]




// Pizza.porototype.itemsCost = function () {
//   this.itemsCost = {small:
//
//   }
//
// }
//
PizzaOrder.prototype.getPizzaPrice = function (item){
  if (item === true){
    alert("yes")
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

    var pizza = new PizzaOrder(inputtedName,inputtedSize)
    pizza.addCustomSauce(inputtedSauce)
    console.log(typeof(pizza.size))
    console.log(pizza.hasOwnProperty("size"))
    pizza.getPizzaPrice(pizza.hasOwnProperty("size"))


    console.log(inputtedName + inputtedSize + inputtedSauce + inputtedToppings + inputtedStyle)


    $("#receipt").show();
    $(".custom").append("<li class='custom'>" + pizza.size + "</l1>")

  });
});
