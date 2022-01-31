var MainTodoContainer = document.getElementById('todos');
var input = document.querySelector('.todo_input');
var addButton = document.querySelector('.add-item');
var deleteAllButton = document.querySelector('.deleteBtn');

const count = 0;

input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the d
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

            var completeButton = document.createElement('INPUT');
            completeButton.classList.add('completed');
            completeButton.setAttribute("type", "checkbox");
            completeButton.setAttribute("onclick", "complete_mark(this)");

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

            deleteBtn.style.display = "block";
            count++;

        }
        // Trigger the button element with a click
    }
});


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
        completeButton.innerHTML = '<input type="checkbox" name="check_marks_data" id="chkEmail"></input>';
        completeButton.onclick = function() {
            complete_mark(this);
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
        deleteBtn.style.display = "block";
        count++;


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

function delete_working(e) {

    var msg = "Delete Confirmation";
    var deletecon = confirm(msg);
    if (deletecon) {
        var getting_Ultag1 = document.querySelectorAll('.todo-list-container');

        var length_count = getting_Ultag1.length;
        for (var i = 0; i < getting_Ultag1.length; i++) {
            {
                e.remove();
                //alert(getting_Ultag1.length);
                if (length_count == 1) {
                    deleteBtn.style.display = "none";
                } else {
                    deleteBtn.style.display = "block";
                }
            }
        }


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
            deleteBtn.style.display = "none";
        }

    } else {
        return false;
    }

}




function complete_mark(e) {
    if (e.checked) {
        var item = e.parentNode.parentNode.firstChild;
        item.id = "newText";
        swal({
            title: "Task",
            text: "Task is completed",
            icon: "success",
            button: "Submit",
        });
    } else {

        var item = e.parentNode.parentNode.firstChild;
        item.removeAttribute("id");
    }

}