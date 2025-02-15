# Sort HashMap by Value 

This project is a simple web-based application that allows users to sort a HashMap (JavaScript Object) by its values in ascending order and display the results on a webpage. The project is structured into three separate files:

index.html → Provides the structure of the webpage.
styles.css → Handles the visual design and styling.
script.js → Contains the logic to sort the HashMap by values.


📌 How the Project Works
When the webpage loads, it displays the original HashMap.
The user clicks the "Sort HashMap" button.
The JavaScript function retrieves the HashMap, sorts it by values alphabetically, and updates the webpage.
The sorted HashMap is displayed below the original one.


📌 Project Structure
The project follows a structured approach by separating concerns:


HTML (index.html)
Defines the webpage layout, including a button to trigger sorting.
Uses <pre> elements to display the original and sorted HashMap.

CSS (styles.css)
Improves the visual appearance by adding background colors, button styles, and text formatting.
Ensures the page looks clean and user-friendly.

JavaScript (script.js)
Stores the HashMap as an object in JavaScript.
Converts the object into an array of key-value pairs for sorting.
Uses the .sort() method to reorder elements based on values.
Converts the sorted array back into an object and updates the webpage.


📌 Features
Interactive Sorting: Click the button to sort the HashMap dynamically.
Maintains Key-Value Pairs: Only values are sorted, keys remain linked to their correct values.
Uses JavaScript's Built-in Methods: Simple and efficient sorting with Object.entries() and .sort().
User-Friendly Interface: Styled with CSS for better readability.


📌 Expected Output
Before Sorting: The original HashMap is displayed.
After Clicking the Button: The HashMap is sorted by values in ascending order and displayed below the original.


📌 How to Use This Project?
Open the index.html file in a web browser.
Click the "Sort HashMap" button.
View the sorted HashMap on the screen.


📌 Key Takeaways
Separation of Concerns: HTML, CSS, and JavaScript are in different files for better organization.
Dynamic Sorting: Sorting happens when the button is clicked.
Easy to Understand: Uses simple JavaScript functions to achieve sorting.


This project is a great way to understand sorting objects in JavaScript and how to manipulate the DOM dynamically. 🚀

