import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';//for genrating unique id
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import "./App.css"
export default function Todo()
{
    let [todos,setTodos]=useState([{task:"simple-task",id:uuidv4(),isDone:false}])
    let [newtodo,setNewTodo]=useState("");
    let addnewTask=()=>{
        // nayi value add ho rahi hai
        setTodos((prevTodos)=>{
            return [...prevTodos,{task:newtodo,id:uuidv4(),isDone:false}];
        });//is tarha se array main task add karte hai
        // console.log("New Task!")
        setNewTodo(" ");//addd karne ke bad empty ho jaye input
    }
    let updateTodoValue=(event)=>{
        // console.log(event.target.value);
        setNewTodo(event.target.value)//render karte vakt set ho rahi hai
        
    }
    let deleteTodo=(id)=>{
        // console.log("task to be deleted")
        // console.log(id)
        // let copy=todos.filter((todo)=> todo.id!=id);//id same nasel tarch ti copyt add karaychi
        // console.log(copy);
        setTodos(todos.filter((prevTodo)=> prevTodo.id!=id));//callback prev value depends on new
    }
    // jab all array ke andar change lana chahte hai tab 
    let uppercaseAll=()=>{
        //    let arr=todos.map((todo)=>{
        //         // console.log(todo.task.toUpperCase());
        //         // setTodos({task:todo.toUpper(),id:todo.id});
        //         return { ...todo,task:todo.task.toUpperCase()};
        //     })
            // console.log(arr);
            // setTodos(arr);
            setTodos((prevTodo)=>(
                prevTodo.map((todo)=>{
                    return {...todo,task:todo.task.toUpperCase()}
                })
            )
            



            )
    }
    let upperCaseOne=(id)=>{
        // console.log("one")
        setTodos((todos)=>
            todos.map((todo)=>{
                if(todo.id===id)
                {
                    return {...todo,task:todo.task.toUpperCase(),
                    }
                }else{
                    return todo;
                }
            })
        

        )
       
        }
        let markAsDone=(id)=>{
            setTodos((todos)=>
            todos.map((todo)=>{
                if(todo.id===id)
                {
                    return {...todo,isDone:true}
                }else{
                    return todo;
                }
            }
            )
            )


        }
        let markAsDoneAll=()=>{
            setTodos((todos)=>
            todos.map((todo)=>{
                return {...todo,isDone:true};
            })
            )
        }
        
    
    return(
        <div className="TodoContainer">
            <h1>TaskTracker</h1>
            {/* <input type="text" placeholder="Add a Task" value={newtodo} onChange={updateTodoValue}/> */}
            <TextField id="outlined-basic btnOuter"  label="Add a Task" variant="outlined" type="text" value={newtodo} onChange={updateTodoValue} />
            <br /><br />
           
            {/* <button onClick={addnewTask}>Add Task</button> */}
            <Button variant="outlined" color="secondary" id="btnOuter" onClick={addnewTask} endIcon={<SendIcon />}>
        Add Task
      </Button>
            <br /><br />
            
            <h2>Tasks Todo</h2>
            <ul>
                {
                todos.map((todo)=>(
                <li key={todo.id}>
                    <span style={todo.isDone ? {textDecorationLine:"line-through"}:{}}>{todo.task}</span>&nbsp;&nbsp;&nbsp;
                    {/* <button onClick={()=>deleteTodo(todo.id)}>delete</button> */}
                    <Button variant="outlined" class="btn btn-secondary btn-sm" startIcon={<DeleteIcon />} onClick={()=>deleteTodo(todo.id)}>Delete</Button>
                    {/* <button onClick={()=>upperCaseOne(todo.id)}>uppercaseOne</button> */}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {/* <button onClick={()=>markAsDone(todo.id)}>Mark as Done</button> */}
                    <Button variant="outlined" class="btn btn-secondary btn-sm" startIcon={<SendIcon />} onClick={()=>markAsDone(todo.id)}>Done </Button>
                    <br /><br />
                    {/* hame id toh chchiye agar deleteTodo(id)ise pass kiya toh oo execute ho jayega isliye we converted it into arrow fuinction */}
                    </li>
                ))
                }
            </ul>
            <br /><br />
            {/* <button onClick={uppercaseAll}>Uppercase All</button> */}
            {/* <button onClick={markAsDoneAll}>Mark As Done All</button> */}
            <Button variant="outlined" id="btnOuter" color="secondary" onClick={markAsDoneAll} endIcon={<SendIcon />}>
            Mark As Done All
      </Button>
      <br></br>
      <br />
      <br />
        </div>
    )
}