import React , {useState , useEffect} from 'react'

function MouseEvent() {

    const [X , setX] = useState(0)
    const [Y , setY] = useState(0)

    const handleMouseMove = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    } 

    useEffect( () =>{
        console.log('mouse moved');
        window.addEventListener('mousemove' , handleMouseMove)

        return () =>{
            console.log('clean up process');
            window.removeEventListener('mousemove' , handleMouseMove)
        }
    } , [])
    return (
        <div>
            hello mouse Event
            X - {X}
            Y - {Y}
        </div>
    )
}

export default MouseEvent
