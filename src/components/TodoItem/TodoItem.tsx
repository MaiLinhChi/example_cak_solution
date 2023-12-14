import React from 'react'
import {
    CloseOutlined,
} from "@ant-design/icons";
import { toggleChecked } from '../../store';

const TodoItem = ({data, onEditTodo, onDeleteTodo, dispatch}) => {
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
    <ul className='divide-y'>
        {data.map((todo, index) => (
            <li key={index} className='group flex items-center gap-3 relative'>
                <div className='w-8'>
                    <input
                        type="checkbox"
                        onChange={(e) => handleChecked(e, index)}
                        checked={todo.checked}
                        className='hidden'
                        id={`check-${index}`}
                    />
                    <label htmlFor={`check-${index}`} className={`block w-10 h-10 ${todo.checked ? "bg-checked" : "bg-check"}`}></label>
                </div>
                <div className='relative w-full h-full p-4'>
                    <div
                        suppressContentEditableWarning={true}
                        contentEditable="true"
                        className={`${todo.checked && "line-through"} p-2 focus:shadow-item focus:border-0 top-0 left-0 w-full h-full flex items-center absolute z-10`}
                        onKeyPress={(e) => onEditTodo(e, index)}
                    >
                        {todo.value}
                    </div>
                    <div className='ml-auto right-0 invisible group-hover:visible float-right'>
                        <CloseOutlined onClick={(e) => onDeleteTodo(index)}  />
                    </div>
                </div>
            </li>
        ))}
    </ul>
  )
}

export default TodoItem