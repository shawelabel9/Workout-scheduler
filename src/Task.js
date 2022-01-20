import {FaTimesCircle} from 'react-icons/fa'

const Task = ({task,handleIcon, handleReminder}) => {
    return (
        <div className={`task ${task.reminder? 'reminder': ''}`} onDoubleClick={()=>handleReminder(task.id)} >
        <h3>{task.text}  <FaTimesCircle style={{color:'red'}} onClick= {()=>{handleIcon(task.id)}} /></h3> 
        <p>{task.day}</p> 
        
        </div>
    )
 }

export default Task 