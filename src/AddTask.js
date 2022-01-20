import {useState} from 'react'

const AddTask = ({handleSubmit}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const submitForm = (e) => {

        e.preventDefault()

        if (!text){
            alert('enter a workout to submit form') 
            
        }else{
            handleSubmit({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
        }
        
        
    }
    return (
        <form className="add-form" >
            <div className="form-control">
            <lable htmlFor='workout'>Type of Workout</lable>
            <input type ='text' placeholder='Add workout' value={text} onChange={(e)=>{setText(e.target.value)}}/> 
             </div> 

            <div className="form-control">
            <lable htmlFor='day'>Day</lable>
            <input type ='text' placeholder='' value={day} onChange={(e)=>{setDay(e.target.value)}}/> 
            </div>

            <div  className="form-control form-control-check">
            <lable htmlFor='reminder'>Reminder</lable>
            <input type ='checkbox' checked={reminder} value={reminder} onChange={(e)=>{setReminder(e.target.checked)}}/> 
            </div> 
            <div>
                <input className='btn btn-block'type='submit' value='Submit Form' onClick={submitForm}/>
            </div> 

        </form>
    )
}

export default AddTask
