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
var createListImg = function(imgSrc){
  var img4 = document.createElement("img");
  img4.src = imgSrc;
  img4.width = 500;
  img4.height = 300;
  return img4;
}
var appendElements = function(cats, catObject, listItem1, listItem2, img4){
  catObject.appendChild(listItem1);
  catObject.appendChild(listItem2);
  catObject.appendChild(img4);
  cats.appendChild(catObject);
}
var addCat = function(listItem1, listItem2, imgSrc){
  var catObject = createCatObject();
  var listItem1 = createListItem1(listItem1);
  var listItem2 = createListItem2(listItem2);
  var img4 = createListImg(imgSrc)

  var cats = document.querySelector("#cats");
  appendElements(cats, catObject, listItem1, listItem2, img4);
}
var app = function() {
  addCat("Murdock", "Whatever you're trying to have for dinner", "https://upload.wikimedia.org/wikipedia/commons/c/c7/A_black_cat_named_Tilly.jpg");
}

window.onload = app;
