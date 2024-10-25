import React, { useState } from 'react'
import { increment,decrement,decrementByUser,incrementByUser,reset } from './counterSlice'
import { useSelector, useDispatch } from 'react-redux';

export default function CounterApp() {

    const count = useSelector(state=>state.counter.value)

    const dispatch = useDispatch();

    const [amount,setAmount] = useState(0)

  return (
    <div>
        <h1>{count}</h1>
        <button
            onClick={()=>{
                dispatch(increment());
            }}
        >increment</button>
        <button
            onClick={()=>{
                dispatch(decrement());
            }}
        >decrement</button>
        <br /><br />
        <input type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}} name="" id="" />
        <button
            onClick={()=>{
                dispatch(incrementByUser(Number(amount)));
            }}
        >Add Amount</button>
        <button
            onClick={()=>{
                dispatch(decrementByUser(Number(amount)));
            }}
        >Less Amount</button>
       {/* <abbr title="dgsdfghdfg"></abbr>  */}
       <button 
            onClick={()=>{
                dispatch(reset()) ;
            }}
        >reset</button>
    </div>
  )
}
