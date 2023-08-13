
import './App.css'

import {data} from './Todo'


function App({setLoad}) {
  function dummy(){
    
    const title=document.getElementById('name')?.value;
      const description=document.getElementById('description')?.value;
    data.push({Name:title,Description:description});
    console.log(data)
    setLoad([...data])
    document.getElementById('name').value="";
    document.getElementById('description').value=""
         
}    
  return (
    <>
    <div className='container'>
    <div className='input-group'>
      <h3 className='app-title'>My Todo</h3>
      <form>
    
    <div className='input'>
      <input type='text' placeholder='Todo Name' id='name' className='row' required/>
      <input type='text' placeholder='Descrition' id='description' required className='row'/>
      <button type='button' id='button' onClick={dummy} className='row' >Add Todo</button>
    </div>
    </form>
    </div>
    </div>
      
    </>
  )
}

export default App
