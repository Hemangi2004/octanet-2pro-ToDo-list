document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText === '') return; // Prevent empty tasks

    const li = document.createElement('li');
    li.innerHTML = `
        ${taskText}
        <button class="deleteBtn">Delete</button>
    `;

    document.getElementById('taskList').appendChild(li);
    taskInput.value = ''; // Clear input field

    // Mark task as done
    li.addEventListener('click', function() {
        li.classList.toggle('done');
    });

    // Delete task
    li.querySelector('.deleteBtn').addEventListener('click', function(e) {
        e.stopPropagation(); // Prevents marking task as done
        li.remove();
    });
});
