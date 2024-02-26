document.getElementById('add-todo-btn').addEventListener('click', function() {
    var todoList = document.getElementById('todo-list');
    var todoInput = document.getElementById('todo-input');
    var newTodoText = todoInput.value;

    if (newTodoText !== '') {
        var li = document.createElement('li');
        var textSpan = document.createElement('span');
        textSpan.textContent = newTodoText;
        textSpan.setAttribute('contenteditable', false); // Initially, not editable

        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className ="delete-btn"
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        var editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className ="edit-btn"
        editBtn.addEventListener('click', function() {
            if (editBtn.textContent === 'Edit') {
                textSpan.setAttribute('contenteditable', true);
                textSpan.focus();
                editBtn.textContent = 'Save';
            } else {
                textSpan.setAttribute('contenteditable', false);
                editBtn.textContent = 'Edit';
            }
        });

        li.appendChild(textSpan);
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);

        todoList.appendChild(li);
        todoInput.value = ''; // Clear the input after adding
    }
});