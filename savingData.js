
var recipe = document.getElementById("recipe");
var name = document.getElementById("name");
var url = document.getElementById("url");
var group = document.getElementById("group");
var desc = document.getElementById("desc");
var ingre = document.getElementById("ingre");
var method = document.getElementById("method");

var submitBtn = document.getElementById("submit");
// prints "started" in the browser's dev tools console to help me know that the first part has gone through
console.log('started');

function submitClick(){
  var momo = method.value;
  
  var recipe_text = recipe.value;
  var name_text = name.value;
  var url_text = url.value;
  var group_text = group.value;
  var desc_text = desc.value;
  var ingre_text = ingre.value;
  var method_text = method.value;
  
  // prints "working" in the browser's dev tools console to help me know that the second part has gone through
  window.alert("working");
  var firebaseRef = firebase.database().ref().child(recipe_text);
  
  window.alert("working");
  firebaseRef.child('recipe').set(recipe_text);
  firebaseRef.child('url').set(url_text);
  firebaseRef.child('group').set(group_text);
  firebaseRef.child('description').set(desc_text);
  firebaseRef.child('ingredients').set(ingre_text);
  firebaseRef.child('method').set(method_text);
  // firebaseRef.push().set(messageText);
}
