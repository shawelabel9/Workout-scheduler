import Header from './Header'
import Tasks from './Tasks'
import './index.css'
import {useState} from 'react'
import AddTask from './AddTask'

function App() {
    const [addTask,setAddTask] = useState(false)
    const [tasks, setTasks] = useState([
        { id: 1,
            text: 'Upper Body',
            day: 'Feb 5th at 2:20pm',
            reminder: true},
    ])

    const handleIcon = (index) => {
        setTasks( tasks.filter((task)=>task.id !== index))  
    
    }
    const remindMe = (index)=>{
        setTasks(tasks.map((task)=>task.id===index? {...task,reminder: !task.reminder }:task))
    }
    const handleSubmit= (workout)=> {
        const id = Math.floor(Math.random()*10000)+1
        const newWorkout= {...workout, id}
        setTasks([...tasks, newWorkout])
        // console.log(workout)

        
    }
    const addNewTask = ()=>{
        setAddTask(!addTask)
    }

    return (
        <div className='container'>
            <Header add={addNewTask} addTask={addTask}/>
            { tasks.length === 0? <h3> There are no more workouts scheduled</h3>:
                <Tasks tasks={tasks} handleIcon={handleIcon} handleReminder={remindMe} />} 
            {addTask?<AddTask handleSubmit={handleSubmit}/>:''}
        </div>
        )
    }
export default App