import Task from './Task.js'
 
const Tasks = ({tasks, handleIcon, handleReminder}) => {
    return (
        <div>
        {/* {tasks.length === 0 && <h3>No more workouts to show</h3>} */}
        {tasks.map((task)=> <Task key={task.id} task={task} handleIcon={handleIcon} handleReminder= {handleReminder}/>
        )}
        </div>
    )
}

export default Tasks
