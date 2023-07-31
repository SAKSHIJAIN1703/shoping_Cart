

import '../App.css';
import React,{useState} from 'react';

function Todo() {
    const [item,setItem]=useState("");

    const [inputList,setInputList]=useState([]);
   
    const itemEvent=(event)=>{
        setItem(event.target.value)
    }
    const listOfItem=()=>{
        setInputList((oldItems)=>{
return[...oldItems,item];
        });
setItem("");
    }
  return (
    <div className="App">
     <>

    <h1 className='heading'>
        todo app
    </h1>
   
<input type="text" placeholder='add items' onChange={itemEvent} value={item} />
<button onClick={listOfItem}>add</button>
<ol>
    {inputList.map((itemval)=>{
        return<li>
           {itemval} 
        </li>
    })}
</ol>
      </>
    </div>
  );
}

export default Todo;
