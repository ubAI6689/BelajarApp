// Get the input element, button element, and todo list
var input = document.getElementById('todo-input');
var addButton = document.getElementById('add-button');
var todoList = document.getElementById('todo-list');

// Add event listener to the button
addButton.addEventListener('click', function() {
    // Create a new list item
    var listItem = document.createElement('li');

    // Create a checkbox
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Create a label
    var label = document.createElement('label');
    label.textContent = input.value;

    // Append checkbox and label to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    // Create a priority dropdown
    var priorityDropdown = document.createElement('select');
    priorityDropdown.innerHTML = `
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
    `;

    // Append the priority dropdown to the list item
    listItem.appendChild(priorityDropdown);

    // Append the list item to the todo list
    todoList.appendChild(listItem);

    // Clear the input field
    input.value = '';
});


// Add event listener to the todo list for checkbox changes
todoList.addEventListener('change', function(event) {
    var checkbox = event.target;
    var label = checkbox.nextElementSibling;

    if (checkbox.checked) {
        label.style.textDecoration = 'line-through';
    } else {
        label.style.textDecoration = 'none';
    }
});
