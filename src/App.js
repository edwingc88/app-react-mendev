import {useState,useEffect} from 'react'
import './App.css';
import {TaskCreator} from './components/TaskCreator'
import {TaskTable} from './components/TaskTable'
import {VisibilityControl} from './components/VisibilityControl'
import {Container} from './components/Container' 


function App() {

  const [tasksItems, setTasksItems] = useState([]);
  const [showCompeted, setShowCompeted] = useState(false);

  function createNewTask(taskName){
    if(taskName !==''){
      if(!tasksItems.find(task=>task.name === taskName)){
        setTasksItems([...tasksItems,{name:taskName , done:false}])
      }
    } 
  }

  const toggleTask = task =>{
    setTasksItems(
      tasksItems.map((t)=>(t.name === task.name)?{...t,done:!t.done}:t)
    )
  }

  useEffect(()=>{
    let data = localStorage.getItem('tasks');
    if (data){
      setTasksItems(JSON.parse(data))
    }
  },[])

  const cleanTasks = ()=>{
    setTasksItems(tasksItems.filter(task=>!task.done));
    setShowCompeted(false);
  }

  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasksItems))
  },[tasksItems])


  return (
    <main className="bg-dark  text-white">
      <h1 className="text-center"> Apps React JS</h1>  
      <hr />
      <Container>
          <h2> APP Taks</h2>  

          <TaskCreator  createNewTask={createNewTask}/>

          <TaskTable  tasks={tasksItems}  toggleTask={toggleTask}  />

          <VisibilityControl isCheked={showCompeted}  setShowCompeted={(checked)=>setShowCompeted(checked)} cleanTasks={cleanTasks} />

          {showCompeted===true &&(
            <TaskTable  tasks={tasksItems}  toggleTask={toggleTask} showCompeted={showCompeted} />
            )
          }
      </Container>

     {/* 
      
      <hr />
    <h2 className="text-center"> APP Pokemon </h2> 
     
        */}
    </main>
  );
}

export default App;
