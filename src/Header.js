import Button from './Button'
const Header = ({add, addTask}) => {
    return (
        <div className="header">
           <header >
             <h2>My Workouts </h2>
            </header> 
            <Button color='rgba(100,100,100,0.5)' text={addTask?'close':'Add'} add={add}/>
        </div>
    )
}

export default Header
