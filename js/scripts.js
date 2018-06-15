function Pizza(name,style,sauce,toppings){
  this.name = name;
  this.styles = style;
  this.sauce = sauce;
  this.toppings = toppings
}

Pizza.prototype.addCustomSauce = function () {
  this.customSauce = "customSauce"

};











$(document).ready(function() {
  $(#submitButton).submit(function(event){
    event.preventDefault();
    var  inputtedName = $("#inputName").val();
    var inputtedPizzaStyle = $("#pizzaStyle").val();

    var pizzaOrder = new Pizza(inputtedName,style)
    $("#receipt").show();
    $(".custom").append("<li> class='custom'" + pizza.Order.style + "</l1>")

  });

});
