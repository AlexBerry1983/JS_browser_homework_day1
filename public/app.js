var app = function() {
  var catObject = document.createElement("ul");
  catObject.classList.add("cat");

  var listItem1 = document.createElement("li");
  listItem1.innerText = "Name:";

  var listItem2 = document.createElement("li");
  listItem2.innerText = "Favourite food:";

  var img4 = document.createElement("img");
  img4.src = "https://upload.wikimedia.org/wikipedia/commons/c/c7/A_black_cat_named_Tilly.jpg";

  catObject.appendChild(listItem1);
  catObject.appendChild(listItem2);
  catObject.appendChild(img4);

  var cats = document.querySelector("#cats");
  cats.appendChild(catObject);
}

window.onload = app;







// createListItem = function(){
//   var listItem = document.createElement("ul");
//   listItem.classList.add("cat");
//   return listItem;
// }
// createCatName = function(catName){
//   var catName = document.createElement("li")
//   catName.classList.add(catName);
//   return catName;
// }
// createFavouriteFood = function(favFood){
//   var favFood = document.createElement("li")
//   favFood.classList.add("Favourite food: " + favFood);
//   return favFood;
// }
// createImage = function(image){
//   var image = document.createElement("li")
//   image.classList.addImage(image);
//   return image;
// }
// var appendElements = function(catName, favFood, image){
//   catName.appendChild(catName);
//   favFood.appendChild(favFood);
//   image.appendChild(image);
// }
// var addCat = function(catName, favFood, image){
//   var listItem = createListItem();
//   var catName = createCatName(catName);
//   var favFood = createFavouriteFood(favFood);
//   var image = createImage(image);
//
//   var quotesList = document.querySelector('#quotes');
//   appendElements(listItem, catName, favFood, image);
// }
// var app = function(){
//   addCat("Muligan", "Salmon", "cat")
// }
//
// window.onload = app;
