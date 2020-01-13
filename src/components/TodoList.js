import React from 'react'
import '../App.css';

function TodoList(props) {
    const styles= {
        textAlign:'center',
        fontSize: 17,
        height: 'auto',


    }//when doing inline styles dont use a hypen use camel case
    const completedstyle ={
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div>
            <div className = 'todo-item'>
           <input type = 'checkbox' checked = {props.todo.completed} onChange = {()=> props.handleChange(props.todo.id)}/>
            <p style= {props.todo.completed ? completedstyle : null}>{props.todo.text}</p><hr></hr>
          
          
           </div>
        </div>
    )
}

export default TodoList

