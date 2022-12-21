let addTodoBtn = document.getElementById('addTodo');
let todoItemsContainer = document.getElementById('todoItems');
let inputField = document.getElementById('inputField');

// add event handler to button(+)

addTodoBtn.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    paragraph.classList.add('para_styling');
    if(inputField.value !== ''){
      todoItemsContainer.appendChild(paragraph);  
    }
    inputField.value = "";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration= 'line-through';
    });
    paragraph.addEventListener('dblclick',function(){
        todoItemsContainer.removeChild(paragraph);
    });
})

