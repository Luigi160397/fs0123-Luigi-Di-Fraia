const input = document.getElementById("todo-input");
        const addBtn = document.getElementById("add-btn");
        const toDoList = document.getElementById("todo-list");
        const delBtn = document.querySelectorAll('.delete')

        addBtn.addEventListener("click", () => {
            let bottone = document.createElement('button')
            bottone.className = 'delete';
            bottone.innerHTML = 'X';
            let newToDo = document.createElement("div");
            newToDo.textContent = input.value;
            toDoList.appendChild(newToDo);
            newToDo.appendChild(bottone);
            input.value = "";
            newToDo.addEventListener('click', () => {
                if (newToDo.style.textDecoration  = 'none'){
                    newToDo.style.textDecoration = 'line-through';
                }else{ newToDo.style.textDecoration  = 'none'}
            })
            bottone.addEventListener('click', () => {
                newToDo.remove()
            })
        })

    
       