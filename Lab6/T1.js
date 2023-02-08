const shoppingForm = document.getElementById("shopping-form");
const itemInput = document.getElementById("item-input");
const shoppingList = document.getElementById("shopping-list");

shoppingForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const itemValue = itemInput.value;
  
  if (!itemValue) return;
  
  const item = document.createElement("li");
  item.textContent = itemValue;
  
  shoppingList.appendChild(item);
  
  itemInput.value = "";
});