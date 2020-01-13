import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import TimeDate from './components/TimeDate';
import Jokes from './components/Jokes';
import jokesData from './components/JokesData';
import todosData from './components/TodoData';
import Conditional from './components/Conditional';



// function App() {
//   // const JokeComponent = jokesData.map(joked => 
//   //   {
//   //     return(<Jokes key={joked.id} joke={joked.question} answer={joked.punchLine} />)
//   //   })
//   const todoComponents = todosData.map(todo =>
//     {
//       return(<TodoList key = {todo.id} text ={todo.text} completed = {todo.completed} />)
//     })

//   return (
//     <div className="App"> 
//       <div className = 'todo-list'> 
//         <TimeDate></TimeDate>
//         {todoComponents}
        
//         {/* <TodoList></TodoList>
//         <TodoList></TodoList>
//         <TodoList></TodoList> */}

//        </div>  
//     </div> 
//   )
// }


// export default App;

class App extends Component {

    constructor(){
      super()
      this.state = {
        todos : todosData,
        isLoading: false
      }
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id){
      this.setState(prevState => {
        const updatetodo = prevState.todos.map(todo =>{
          if (todo.id === id){
           
            return{
              ...todo, //give me everything u have on todo
              completed: !todo.completed //negate completed on todo.completed
            }
           
          }
          return todo
          
        })
        return {
          todos:updatetodo
        }
      }

      )


        //used to flip the completed from false to true and vice verser by changing the state of the todo.completed object
        //use prevstate to hold the value of the state before the change
      
    
    }

    componentDidMount(){
        setTimeout(()=>{
          this.setState({
            isLoading:true
          })
        }, 1500)
    }
  
  render(){
  const todoComponents = this.state.todos.map(todo => (<TodoList key = {todo.id} todo ={todo} handleChange = {this.handleChange}/>)
)

  return (
    <div className="App"> 
      <div className = 'todo-list'> 
        <TimeDate></TimeDate>
        {this.state.isLoading ? todoComponents : 'Loading todo list.' } 
        {/* <TodoList></TodoList>
        <TodoList></TodoList>
        {/* <TodoList></TodoList> */}
       
       </div>  
    </div> 
  )}
}


export default App;
