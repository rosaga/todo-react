import React from 'react'
import '../App.css';

function TodoList(props) {
    const styles= {
        textAlign:'center',
        fontSize: 16,
        height: 'auto',


    }//when doing inline styles dont use a hypen use camel case
    return (
        <div style = {styles}>
            <div className = 'Todolist-items'>
           <input type = 'checkbox' checked = {props.todo.completed} onChange = {()=> props.handleChange(props.todo.id)}/>{props.todo.text}
           <hr></hr>
          
           </div>
        </div>
    )
}

export default TodoList

