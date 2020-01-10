import React from 'react'
import '../App.css';


function Jokes(props) {
    let styles = {
        color: 'red',
    }


    return (
        <div className = 'jokes'>
            <h1 style = {{display: !props.joke && 'none'}}>Joke: {props.joke}</h1> 
             {/* // use of ternery */}
            <h1 style = {styles}>Answer: {props.answer} </h1>
        </div>
    )
}

export default Jokes
