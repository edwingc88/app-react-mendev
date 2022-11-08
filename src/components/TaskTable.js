import React from 'react'
import {TaskRow} from './TaskRow'

export const TaskTable =({tasks,toggleTask,showCompeted=false})=>{
 
    const taskTableRows =(doneValue)=>{
       return  (
            tasks
            .filter(task=> task.done === doneValue)
            .map(task=>(
            <TaskRow  task={task} key={task.name} toggleTask={toggleTask}  />
         ))
       )
    }


    return (
        <table className="table table-dark table-striped table-bordered border-secondary">
        <thead>
          <tr className="table-primary">
            <th  className="d-flex justify-content-between"><div>Tasks</div><div>Check</div></th>
          </tr>
        </thead>
        <tbody>
          {
            taskTableRows(showCompeted)
          }
        </tbody>   
      </table>
    )

}
