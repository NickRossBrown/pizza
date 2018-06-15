function PizzaOrder(name,size,totalPrice){
  this.name = name;
  this.size = size;
  this.totalPrice = 0
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
function getPizzaPrice(item){
  // pizza.hasOwnProperty("item")

  var inputtedName = $("#inputName").val();
  var inputtedSize= $("#pizzaSize").val();
  var pizza = new PizzaOrder(inputtedName,inputtedSize)
  console.log(pizza.size+pizza.hasOwnProperty("item"))
  if (pizza.hasOwnProperty("item") !== null){
    for (i=0; i < itemsCost.length ;i++){
      if (pizza.(item) === itemsCost[i][0]){
        console.log(itemsCost[i][1]+"123212312312")
        totalPrice+=itemsCost[i][1]
        return itemsCost[i][1]
      }
    }
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
    console.log(pizza.size)
    console.log(pizza.hasOwnProperty("size"))
    getPizzaPrice(pizza.size)


    console.log(inputtedName + inputtedSize + inputtedSauce + inputtedToppings + inputtedStyle)


    $("#receipt").show();
    $(".custom").append("<li class='custom'>" + pizza.size + "</l1>")

  });
});
