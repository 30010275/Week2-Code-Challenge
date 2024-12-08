# Week2-Code-Challenge
#htm 
inputwo input fields are provided for entering an item name and its price.
Buttons:
Add Button: Adds an item to the shopping list.
Clear List Button: Clears all items from the list.
Toggle Dark/Light Mode: Switches between dark and light themes.
Unordered List (<ul>): Displays the list of items.
<!...meta charset="UTF-8">: Sets the character encoding to UTF-8, allowing the page to support most characters and symbols globally.
<!meta name="viewport" content="width=device-width, initial-scale=1.0">: Makes the page responsive to different screen sizes. It ensures that the width of the content matches the screen width of the device.
<!title>Shopping List</title>: Sets the title of the webpage (visible in the browser tab).
<!link rel="stylesheet" href="styles.css">: Links the external CSS file (styles.css) for styling the page.

#css
Background Image: The background-image property sets a shopping cart image as the background for the body of the page. The image is stretched to cover the entire page.
Layout:
#controls: This container holds the input fields and buttons, aligned using flex.
Buttons: Styled with padding, background color, and a hover effect.
List Styling: Each list item (<li>) is styled with padding, background color, and borders. The .purchased class adds a strikethrough effect and changes the background color for purchased items.
Dark Mode: The .dark-mode class changes the background and text colors to dark for a better contrast in low-light environments.

#js script
Adding Items:
When the Add button is clicked, it gets the values from the item name and price fields. If both values are present, it creates a new list item (<li>) and appends it to the shopping list.
A span containing the price is also added to each list item.
Clicking on a list item toggles its purchased state (adds or removes the .purchased class).
Clear List: The Clear List button empties the shopping list (shoppingList.innerHTML = '').
Dark/Light Mode: The Toggle Dark/Light Mode button switches between light and dark mode by adding or removing the .dark-mode class to the body.
