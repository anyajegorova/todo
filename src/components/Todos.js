import React, { useState } from 'react';
import '../App.css';

function Todos() {
    const [todo, setTodo] = useState({desc: '', date: ''});
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        setTodos([todo, ...todos]);
    }

    const inputChanged = (event) =>{
        setTodo({...todo,[event.target.name]: event.target.value});
    }

    return(
        <div >
            <div class="Todo">
                <div class="row"> Add todo:</div>
                <div class="row"><label>Description: </label> <input name="desc" value={todo.desc} onChange={inputChanged} /></div>
                <div class="row"><label>Date: </label> <input name="date" type="date" value={todo.date} onChange={inputChanged} /></div>
                <div class="row"><button onClick={addTodo}>Add</button></div>
                

            </div>

            <table>
                <tbody>
                    <div class="body">
                        <div class="row">Description </div>
                        <div class="row">Date</div>                
                    </div>
                    <div class="column">
                    {

                    todos.map( (todo, index) => 
                        <tr key={index}>
                            <td> {todo.desc}</td>
                            <td>  {todo.date}</td>
                        </tr>
                        )
                }
                    </div>

                </tbody>
            </table>

        </div>
    )

}

export default Todos;