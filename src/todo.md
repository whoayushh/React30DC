import React,{useState} from 'react';
import datas from './datas.json';



const Data = () => {
    const[nData, setnData] =  useState(datas);
    const handleRemove = (itemID)=>{ 
        setnData(nData.filter(item=>item.id!==itemID))
    }
const handleUpdate = (itemId)=>{
    setnData(nData.map(items=>{
        if((items.id === itemId)){
            return{name:"newName"}
        }
        else{
            return items;
        }
    }))
}
  return (
    
    <div>
        <ul>
            {
                nData.map(items=>
                    <li key = {items.id}>
                    {items.name}
                    <br />
                    <button onClick={()=>handleRemove(items.id)}> Remove</button>
                    <button onClick={()=>handleUpdate(items.id)}> update</button>
                    </li>
                )
            }
        </ul>
        <button onClick= {()=>setnData([])}>Clear</button>
    </div>
    
  )
}

export default Data