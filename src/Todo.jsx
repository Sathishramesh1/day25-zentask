import React, { useState } from 'react'
import './App.css'
import App from './App'

const data=[
    {Name:"office task-1",Description:"This is first description"},
    {Name:"office task-2",Description:"This is second description"},
    {Name:"office task-3",Description:"This is third description"}] 
 
 function handle(event,index){ 
    // console.log(event.target.value);
    // console.log("option",document.getElementById(index));
   let color=event.target.value ;
     if(color==="Completed"){
    document.getElementById(index).querySelector("select").style.backgroundColor="yellowgreen"
    }else{
    document.getElementById(index).querySelector("select").style.backgroundColor="rgba(218, 94, 94, 0.594)"    
    }
     }

   

function Todo() {
   const [load,setLoad]=useState(data);
   const [option,setOption]=useState("Not-completed");


   function handlefilter(event){
    // console.log("eventclick",event.target)
    const typeoffilter=event.target.value

const card=document.getElementsByClassName('todo')
if(typeoffilter==="Completed"){
[...card].filter((e)=>{
    e.style.display="unset"
    if(e.querySelector('select').value!==typeoffilter){
   e.style.display="none"
    }
})
}
else if(typeoffilter==="Not-Completed"){
    const filterdata=[...card];
filterdata.filter((e)=>{
    e.style.display="unset"
    if(e.querySelector('select').value!==typeoffilter){
    e.style.display="none"
    }
})
}
else{
 let all=document.getElementsByClassName('todo');
 [...all].map((e)=>e.style.display="initial")
 
}
}
 
//function to edit the data
const edit=(index)=>{
    
    const ind=document.getElementById(index).id
   const edited= data.splice(index,1) 
    setLoad([...data]);
  document.getElementById("name").value=edited[0].Name;
  document.getElementById("description").value=edited[0].Description

}
//function to delete the datas
const remove=(index)=>{
    const removed=data.splice(index,1);
    setLoad([...data])

}  

  return (
    <>
    <App setLoad={setLoad}/>
    <div className='container' id='container'>
        <h5 className='heading row'>My Todo List

            <span className='filter col'>Status Filter :
            <select name='filter' className='options' onClick={()=>{handlefilter(event)}}>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Not-Completed">Not-Completed</option>
            </select>
            </span>
        </h5>
    </div>
    <div className='group' id='group'>
        <div className='card '>
            {load.map((element,index)=>{
                return(
                <div key={index} className='todo' id={index}>  
                <p >Name:{element.Name}</p>
                <p>Description:{element.Description}</p>
                <label htmlFor='status'>Status :</label>
                <select name='status' id='status' className='status' onClick={()=>{handle(event,index)}} >
                <option value="Not-Completed"  >Not Completed</option>
                <option value="Completed" >Completed</option>
                </select>
                <br/>
                <div className='button-group'>
                    <button onClick={()=>{edit(index)}} >Edit</button>
              
                    <button onClick={()=>{remove(index)}}>Delete</button>
                </div>
                </div>)

            })}

        </div>
    </div>
   
    
    </>
  
  )
  
}

export default Todo
export {data}  

