import React from 'react'
import {
    CloseOutlined,
} from "@ant-design/icons";
import { toggleChecked } from '../../store';

const TodoItem = ({data, onChangeTodo, onEditTodo, onDeleteTodo, dispatch}) => {
    const handleChecked = (event, index) => {
        let updatedList = [...data];
        const checked = event.target.checked
        if (checked) {
            updatedList[index] = {
                ...updatedList[index],
                checked: checked
            }
            dispatch(toggleChecked(updatedList))
        } else {
            updatedList[index] = {
                ...updatedList[index],
                checked: checked
            }
            dispatch(toggleChecked(updatedList))
        }
    }
  return (
    <ul>
        {data.map((todo, index) => (
            <li key={index} className='flex items-center gap-3'>
                <span>
                    <input type="checkbox" onChange={(e) => handleChecked(e, index)} checked={todo.checked} />
                </span>
                <div
                    suppressContentEditableWarning={true}
                    contentEditable="true"
                    className={`p-2 w-20 min-w-full ${todo.checked && "line-through"}`}
                    onKeyPress={(e) => onEditTodo(e, index)}
                    onInput={onChangeTodo}
                >
                    {todo.value}
                </div>
                <CloseOutlined onClick={(e) => onDeleteTodo(index)} />
            </li>
        ))}
    </ul>
  )
}

export default TodoItem