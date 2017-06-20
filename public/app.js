var createCatObject = function(){
  var catObject = document.createElement("ul");
  catObject.classList.add("cat");
  return catObject;
}
var createListItem1 = function(catName){
  var listItem1 = document.createElement("li");
  listItem1.innerText = "Name: " + catName;
  return listItem1;
}
var createListItem2 = function(favFood){
  var listItem2 = document.createElement("li");
  listItem2.innerText = "Favourite food: " + favFood;
  return listItem2;
}
var createListImg = function(imgUrl){
  var imgLi = document.createElement("li")
  var imageVariable = document.createElement("img");
  imageVariable.src = imgUrl;
  imageVariable.width = 500;
  imageVariable.height = 400;
  imgLi.appendChild(imageVariable)
  return imgLi;
}
var appendElements = function(cats, catObject, listItem1, listItem2, imgLi){
  catObject.appendChild(listItem1);
  catObject.appendChild(listItem2);
  catObject.appendChild(imgLi);
  cats.appendChild(catObject);
}
var addCat = function(catName, favFood, imgUrl){
  var catObject = createCatObject();
  var listItem1 = createListItem1(catName);
  var listItem2 = createListItem2(favFood);
  var imgLi = createListImg(imgUrl)

  var cats = document.querySelector("#cats");
  appendElements(cats, catObject, listItem1, listItem2, imgLi);
}
var app = function() {
  addCat("Murdock", "Whatever you're trying to have for dinner", "https://upload.wikimedia.org/wikipedia/commons/c/c7/A_black_cat_named_Tilly.jpg");
}

window.onload = app;
