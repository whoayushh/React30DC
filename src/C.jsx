import React,{useContext} from 'react'
import {GreetContext} from './A'

const C = () => {
    const useCon = useContext(GreetContext);

    
  return (
    <h1>Greet:{useCon}</h1>
  )
}

export default C