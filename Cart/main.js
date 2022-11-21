//populated cart array for puppies
var items = [
   {
      id: 1,
      image: "https://m.media-amazon.com/images/I/71Mef5I77oL._AC_UL640_FMwebp_QL65_.jpg",
      name: "Puppy Mat",
      price: 6000,
   },
   {
      id: 2,
      name: "Pet balls",
      image: "https://m.media-amazon.com/images/I/61nJJZZiN-L._AC_UL640_FMwebp_QL65_.jpg",
      price: 2500,
   },
   {
      id: 3,
      name: "Pet Clothes",
      image: "https://m.media-amazon.com/images/I/61MQ8oX8J7L._AC_UL640_FMwebp_QL65_.jpg",
      price: 1000,
   },
   {
      id: 4,
      name: "Indoor potty",
      image: "https://m.media-amazon.com/images/I/81vzt+5nFTL._AC_UL640_FMwebp_QL65_.jpg",
      price: 7000,
   },
   {
      id: 5,
      name: "Dog grooming tub",
      image: "https://m.media-amazon.com/images/I/71n79yyq39L._AC_UL640_FMwebp_QL65_.jpg",
      price: 15000,
   },
   {
      id: 6,
      name: "Dog nail grinder",
      image: "https://m.media-amazon.com/images/I/61hpFXt6W7L._AC_UL640_FMwebp_QL65_.jpg",
      price: 3000,
   },
   {
      id: 7,
      name: "Mini dog tracking device",
      image: "https://m.media-amazon.com/images/I/51M04EK4wmL._AC_UL640_FMwebp_QL65_.jpg",
      price: 9000,
   },
];

var cart = [];

//Home page
$(document).ready(function () {
   //get total quantity from cart
   getTotalQuantity();

   var cartHTML = $.map(items, function (item) {
      return (
         '<div class="item">' +
         `<img src=${item.image} class="item-image"> ` +
         "</img>" +
         "<h4>" +
         item.name +
         "</h4>" +
         `<div class="item-details">` +
         "<span>" +
         ` ₦ ${item.price}` +
         "</span>" +
         "<button class=addCart>" +
         `<i class="fas fa-cart-plus icon-cart" ></i>` +
         // "Add to Cart" +
         //to add icon
        //  + `<i class="fa-solid fa-cart-plus"></i>` +
         "</button>" +
         "</div>" +
         "</div>"
      );
   });
   $("#cart").html(cartHTML);
});

//because button is dynamically created, we need to use event delegation
const cartArray = [];
$(document).on("click", ".addCart", function () {
   var name = $(this).parent().parent().children("h4").text();
   var price = $(this).parent().children("span").text();
   var image = $(this).parent().parent().children("img").attr("src");

   const cart = new Object();
   cart.name = name;
   cart.price = price;
   cart.image = image;
   cart.quantity = 1;

   const result = cartArray.findIndex((item) => name == item.name);
   console.log(result);
   if (result != -1) {
      alert("Item already in cart");
      return false;
   }
   cartArray.push(cart);

   //store cart in local storage

   localStorage.setItem("cart", JSON.stringify(cartArray));

   alert("Successfully added to cart");
});

//increment quantity in localstorage
$(document).on("click", ".incrementCart", function () {
   const name = $(this).parent().parent().parent().children(".first_row").children("h4").text();
   const quantity = $(this).parent().children("span");
   const cartArray = JSON.parse(localStorage.getItem("cart"));
   const result = cartArray.findIndex((item) => name == item.name);
   cartArray[result].quantity++;
   quantity.text(cartArray[result].quantity);

   localStorage.setItem("cart", JSON.stringify(cartArray));

   //get total quantity from cart
   getTotalQuantity();
});

$(document).on("click", ".decrementCart", function () {
   const name = $(this).parent().parent().parent().children(".first_row").children("h4").text();
   const quantity = $(this).parent().children("span");
   const cartArray = JSON.parse(localStorage.getItem("cart"));
   const result = cartArray.findIndex((item) => name == item.name);

   if (cartArray[result].quantity == 1) {
      let text = "Do you want to remove item from cart";
      if (confirm(text) == true) {
         cartArray.splice(result, 1);
         console.log("success");
         localStorage.setItem("cart", JSON.stringify(cartArray));
         //get total quantity from cart
         getTotalQuantity();
         $(this).parent().parent().parent().remove();
      } else {
         return false;
      }
   } else {
      cartArray[result].quantity--;

      quantity.text(cartArray[result].quantity);
      localStorage.setItem("cart", JSON.stringify(cartArray));
      //get total quantity from cart
      getTotalQuantity();
   }
});

// remove item from cart
$(document).on("click", ".removeCart", function () {
   const name = $(this).parent().parent().children(".first_row").children("h4").text();

   const cartArray = JSON.parse(localStorage.getItem("cart"));
   const result = cartArray.findIndex((item) => name == item.name);
   cartArray.splice(result, 1);
   localStorage.setItem("cart", JSON.stringify(cartArray));
   //get total quantity from cart
   getTotalQuantity();
   $(this).parent().parent().remove();
});

//get total quantity from cart
function getTotalQuantity() {
   const cartArray = JSON.parse(localStorage.getItem("cart"));
   let totalQuantity = 0;
   cartArray.forEach((item) => {
      totalQuantity += item.price.split(" ")[2] * item.quantity;
   });

   $("#subtotal").children("span").text(`₦ ${totalQuantity}`);
   $("#checkout").children("span").text(`₦ ${totalQuantity}`);
   return totalQuantity;
}

// get cart from local storage and show on cart.html
var cartItems = JSON.parse(localStorage.getItem("cart"));
var cartHTML = $.map(cartItems, function (item) {
   return (
      `<div class="cart-item" key=${item.id}>` +
      '<div class="first_row" style="display: flex;">' +
      ` <img src=${item.image} alt="" width="100px"  /> ` +
      " <h4>" +
      item.name +
      "</h4>" +
      ' <div style="display: flex; margin-left: auto; font-size: 1.4em; font-weight: 500;"> ' +
      `<p>${item.price}</p>` +
      "  </div> " +
      "</div>" +
      '<div class="second_row btn-use" style="display: flex; padding: 1em 0;"> ' +
      '<button class="removeCart btn-use">Remove</button>' +
      ' <div class="" style="margin-left: auto;">' +
      '<button class="decrementCart btn-use">-</button>' +
      `<span id="item-quantity">${item.quantity}</span>` +
      '<button class="incrementCart btn-use">+</button>' +
      "</div>" +
      "</div>" +
      " </div>"
   );
});
$("#cartItems").html(cartHTML);
