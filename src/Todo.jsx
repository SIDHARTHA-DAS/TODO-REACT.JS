import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";
import "./index.css";
import { getLocalStorageTodoData } from "./TodoLocalStorage";
import { setLocalStorageTodoData } from "./TodoLocalStorage";


const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoData())

  const handleFormSubmit = (inputValue) => {
    const {id, content, checked} = inputValue

    // to checked the input is empty  or not 
    if (!content) return;

    // to checked the data is already exsiting or not
    // if (task.includes(inputvalue)) return;
    const ifTodoContentMatched = task.find((curtask)=> curtask.content === content );
    if(ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, {id, content, checked}]);
  };


  // todo handleTodoDelete function

  const handleTodoDelete = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };

  // todo all data clear.

  const handelClearButton = () => {
    setTask([]);
  };


  // todo handlecheckedtodo function

  const handleCheckedTodo = (content) =>{
     const updatedTask = task.map((curtask) =>{
         if(curtask.content === content){
          return {...curtask, checked:!curtask.checked}
         }else{
          return curtask;
         }
     })
     setTask(updatedTask)
  }


  //  todo add data to localstorge

  setLocalStorageTodoData(task)

 


  return (
    <section className="todo-container">
      <header>
        <h1>TODO LIST</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo ={handleFormSubmit}/>
      <section className="myUnOrdList">
        <ul>
          {task.map((curtask) => {
            return (
              <TodoList
                key={curtask.id}
                data={curtask.content}
                checked={curtask.checked}
                onHandleTodoDelete={handleTodoDelete}
                onHandleCheckedTodo = {handleCheckedTodo}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handelClearButton}>
          Clear all
        </button>
      </section>
    </section>
  );
};

export default Todo;
