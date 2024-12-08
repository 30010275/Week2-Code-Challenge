// Wait for DOM content to load before executing the script
document.addEventListener('DOMContentLoaded', function () {
  // References to DOM elements
  const itemInput = document.getElementById('item-input');
  const priceInput = document.getElementById('price-input');
  const addButton = document.getElementById('add-button');
  const clearButton = document.getElementById('clear-button');
  const shoppingList = document.getElementById('shopping-list');
  const themeToggleButton = document.getElementById('theme-toggle');
  
  // Toggle dark/light mode
  themeToggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
  });

  // Add item to the list
  function addItem() {
    const itemName = itemInput.value.trim(); // Get input value for item name
    const itemPrice = priceInput.value.trim(); // Get input value for item price

    if (itemName && itemPrice) {
      // Create a new list item
      const listItem = document.createElement('li');
      listItem.textContent = itemName;

      // Create a span for the price and append it to the list item
      const priceSpan = document.createElement('span');
      priceSpan.classList.add('price');
      priceSpan.textContent = `KSh ${parseFloat(itemPrice).toFixed(2)}`; // Format price in KSh

      // add price span to the list item
      listItem.appendChild(priceSpan);

      // Add event listener to toggle purchased status on click
      listItem.addEventListener('click', () => {
        listItem.classList.toggle('purchased');
      });

      // add the new item to the shopping list
      shoppingList.appendChild(listItem);

      // Clear the input fields after adding item
      itemInput.value = '';
      priceInput.value = '';
    } else {
      alert('Please enter both item and price.');
    }
  }

  // Clear the entire shopping list
  function clearList() {
    shoppingList.innerHTML = '';
  }

  // Attach event listeners for the buttons
  addButton.addEventListener('click', addItem);  // Add button functionality
  clearButton.addEventListener('click', clearList);  // Clear button functionality
});
