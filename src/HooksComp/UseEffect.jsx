import React, {useState, useEffect} from 'react'

function UseEffect() {
 
    const [count, setCount] = useState(0); 
    const [name, setName] = useState(''); 
    useEffect(()=>{
        console.log('UseEffect - updating document title')
        document.title = `Clicked ${count}`
    }, [count])
  return (
    <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
        <button onClick={()=> setCount(count+1)}>
            Counter: {count}
        </button>
    </div>
  )
}

export default UseEffect