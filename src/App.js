import Header from './Header'
import Tasks from './Tasks'
import './index.css'
import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddTask from './AddTask'
import Footer from './Footer'
import About from './About'

function App() {
    const [addTask,setAddTask] = useState(false)
    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const res = await fetch('http://localhost:5000/workouts')
            const data = await res.json()

            setTasks(data)
        }
        fetchData()
    },[])

    const handleIcon = async (index) => {
        fetch(`http://localhost:5000/workouts/${index}`, {
            method:'DELETE'
        })
        setTasks( tasks.filter((task)=>task.id !== index))  
    
    }

    const  getData = async (id) => {
        const res = await fetch(`http://localhost:5000/workouts/${id}`)
        const data = await res.json()

        return data
    }
    const remindMe =async (index)=>{
        const toupd = await getData(index)
        const updWorkout = {...toupd,reminder: !toupd.reminder}
        const res = await fetch(`http://localhost:5000/workouts/${index}`, {
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(updWorkout)
        })
        const data = await res.json()

        setTasks(tasks.map((task)=>task.id===index? {...task,reminder: data.reminder }:task))
    }
    const handleSubmit= async (workout)=> {
        // const id = Math.floor(Math.random()*10000)+1
        // const newWorkout= {...workout }
        const res =await fetch('http://localhost:5000/workouts', {
            method:'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(workout)    
        })
        const data = await res.json()
         
        // console.log(data)
        setTasks([...tasks, data])
        // console.log(workout)

        
    }
    const addNewTask = ()=>{
        setAddTask(!addTask)
    }

    return (
        <Router>
            <Routes>
                <Route path='/' element={
                    <div className='container'>
                    <Header add={addNewTask} addTask={addTask}/>
                    { tasks.length === 0? <h3> There are no more workouts scheduled</h3>:
                        <Tasks tasks={tasks} handleIcon={handleIcon} handleReminder={remindMe} />} 
                    {addTask?<AddTask handleSubmit={handleSubmit}/>:''}
                    <Footer/>
                    
                </div>
                }></Route>
                
                <Route path='/about' element={
                 <div className= 'container'>
                <Header add={addNewTask} addTask={addTask}/>
                <About/>
                <Footer/>
                </div>
                }></Route>
            </Routes>
        </Router>
        )
    }
export default App