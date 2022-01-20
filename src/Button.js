const button = ({text, color, add}) => {
    return (
        <div>
            <button style={{backgroundColor:color}} className='btn' onClick={add}>{text}</button>
        </div>
    )
}

export default button
