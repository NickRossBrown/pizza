function Pizza(name,size){
  this.name = name;
  this.size = size;
  // this.sauce = sauce;
  // this.toppings = toppings
}

Pizza.prototype.addCustomSauce = function () {
  this.customSauce = "customSauce"

};











$(document).ready(function() {
  $("form.pizzaMenu").submit(function(event){
    event.preventDefault();
    var inputtedName = $("#inputName").val();
    var inputtedSize= $("#pizzaSize").val();
    var inputtedSauce = $("#pizzaSauce").val();
    console.log(inputtedSize)

    var pizzaOrder = new Pizza(inputtedName,inputtedSize)
    pizzaOrder.addCustomSauce(inputtedSauce)

    console.log("sauce" + inputtedSauce)


    $("#receipt").show();
    $(".custom").append("<li class='custom'>" + pizzaOrder.size + "</l1>")

  });

});
