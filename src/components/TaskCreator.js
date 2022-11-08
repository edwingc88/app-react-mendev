import {useState} from 'react'


export const TaskCreator= ({createNewTask})=>{

    const [ newTaskName, setNewTaskName ] =useState('');

    const handleSubmit= (e) =>{
      e.preventDefault();
      createNewTask(newTaskName);
      setNewTaskName('')
    }
    
    return (

        <form onSubmit={handleSubmit} className='my-2 row'>
        <div className="col-9 p-2">
            <input type="text" className="form-control m-1  "  placeholder='Enter a new Task' value={newTaskName} onChange={(e)=>setNewTaskName(e.target.value)} />
       
        </div>
        <div className="col-3 p-2">
          <button className="btn btn-primary btn-sm m-1 p-2">Save task</button>
        </div>
   
        </form>
        

    )

    

}


