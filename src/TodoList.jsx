import { MdCheck, MdDeleteForever } from "react-icons/md";

const TodoList = ({  data, checked, onHandleTodoDelete, onHandleCheckedTodo}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
        <MdCheck className="check" />
      </button>
      <button className="delete-btn" onClick={() => onHandleTodoDelete(data)}>
        <MdDeleteForever className="delete" />
      </button>
    </li>
  );
};

export default TodoList;
// key={key} key,