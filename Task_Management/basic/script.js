// Get references to HTML elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Event listener for form submission
taskForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  // Get the task name from the input field
  const taskName = taskInput.value.trim();

  if (taskName !== '') {
    // Create a new task item
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
      <span class="task-name">${taskName}</span>
      <button class="delete-btn">Delete</button>
    `;

    // Add the task item to the task list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
  }
});

// Event listener for delete button clicks
taskList.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete-btn')) {
    // Remove the task item when delete button is clicked
    const taskItem = e.target.closest('.task-item');
    taskList.removeChild(taskItem);
  }
});
