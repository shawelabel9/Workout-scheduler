import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

const WorkoutDetails =() => {
    const [details,setDetails] = useState({})
    const params = useParams()
    const navigate = useNavigate()
    // console.log(params)/
    useEffect(() => {
        const fetchWorkout =  async () => {
            const res = await fetch(`http://localhost:5000/workouts/${params.id}`)
            const data = await res.json()
            if(res.status === 404){
                navigate('/')
            }
            setDetails(data)
            }
        fetchWorkout()
    },[params.id])
  return (
    <div >
        <h3>{details.text}</h3>
        <p>{details.day}</p>
        <Link to='/'>Go back</Link>
    </div>
  )
}

export default WorkoutDetails