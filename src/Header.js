import Button from './Button'
import {useLocation} from 'react-router-dom'
const Header = ({add, addTask}) => {
    const location = useLocation() 

    return (
        <div className="header">
           <header >
             <h2>My Workouts </h2>
            </header> 
            { location.pathname ==='/' && <Button color='rgba(100,100,100,0.5)' text={addTask?'close':'Add'} add={add}/>  }
            
        </div>
    )
}

export default Header
