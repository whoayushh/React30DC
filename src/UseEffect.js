import React,{useEffect,useState} from 'react'
 
const UseEffect = () => {
const[clicked,setClicked] = useState();
const[count , setCount]= useState(0);

useEffect(()=>{
  alert("we are in use statae");
},[clicked])
  return (
    <div>
        <button onClick={()=>setClicked('Subscribe')}>Subscribe</button>
        <br/>
        <hr/>
        <button onClick = {()=>setClicked('To')}>To</button>
        <br/>
        <hr/>
        <button onClick = {()=>setClicked('DropXout')}>DropXout</button>
        <h1>{clicked}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <h1>{count}</h1>
    </div>
  )
}

export default UseEffect