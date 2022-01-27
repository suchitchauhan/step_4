var MainTodoContainer = document.getElementById('todos');
var input = document.querySelector('.todo_input');
var addButton = document.querySelector('.add-item');
var deleteAllButton = document.querySelector('.deleteBtn');

addButton.addEventListener("click", function(e) {
    if (input.value.trim()) {

        var ultag = document.createElement('ul');
        ultag.classList.add('todo-list-container');


        //div 
        var todolist = document.createElement('div');
        todolist.classList.add('todo-list');


        var litag = document.createElement('li');
        litag.innerHTML = input.value;
        litag.classList.add('todo-item');

        //button
        var buttonDiv = document.createElement('div');
        buttonDiv.classList.add('button');

        var completeButton = document.createElement('button');
        completeButton.classList.add('completed');
        completeButton.innerHTML = '<abbr title="CheckMark"><i class="fas fa-check" ></i></abbr>';
        completeButton.onclick = function() {
            complete_mark(ultag);
        }

        var editButton = document.createElement('button');
        editButton.classList.add('editBtn');
        editButton.innerHTML = '<abbr title="EditForClick"><i class="fas fa-edit" ></i></abbr>';

        editButton.onclick = function() {
            edit_working(litag);
        }

        var delteButton = document.createElement('button');
        delteButton.classList.add('trash');
        delteButton.innerHTML = '<abbr title="DeleteForClick"><i class="fas fa-trash" ></i></abbr>';
        delteButton.onclick = function() {
            delete_working(ultag);
        }


        ultag.appendChild(todolist);
        todolist.appendChild(litag);
        todolist.appendChild(buttonDiv);

        buttonDiv.appendChild(completeButton);
        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(delteButton);

        MainTodoContainer.appendChild(ultag);


        input.value = "";


    } else if (input.value === '') {
        swal("Please Input Task", "before clicked the button!", "warning");

    }
})

function edit_working(e) {
    var msg = "Edit The Selected Task";
    var edit_value = prompt(msg, e.firstChild.nodeValue);
    if (edit_value) {
        if (edit_value == null) {
            return swal("Please Input Task", "before clicked the button!", "warning");
        } else { return e.firstChild.nodeValue = edit_value; }

    } else {
        return false;
    }



}

function deleteAllTask() {

    var msg = "Delete Confirmation";
    var deletecon = confirm(msg);
    if (deletecon) {
        var getting_Ultag = document.querySelectorAll('.todo-list-container');
        for (var i = 0; i < getting_Ultag.length; i++) {
            {
                getting_Ultag[i].remove();
            }
        }

    } else {
        return false;
    }

}

function delete_working(e) {
    var msg = "Delete Confirmation";
    var deletecon = confirm(msg);
    if (deletecon) {

        return e.remove();
    } else {
        return false;
    }
}

function complete_mark(e) {
    var msg1 = "Check the Task";
    var checktask = confirm(msg1);
    if (checktask) {
        return e.classList.add('line_through');
    } else {
        return false;
    }

}