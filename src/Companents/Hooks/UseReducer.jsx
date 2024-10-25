import React,{ useReducer } from 'react'
const initialState = {count1:0 ,count2:0}

const reducer = (state, action) =>{
     
    switch(action.type){
        case'increament':
            return {count1: state.count1 +1}
            break;
        case 'decreament':
            return {count1: state.count1 -1}
            break;
        case 'reset':
            return {count1: 0}
            break;
    }
}

export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h1>{state.count1}</h1>
        <button onClick={()=>{dispatch({type:'increament'})}}>+</button>
        <button onClick={()=>{dispatch({type:'decreament'})}}>-</button>
        <button onClick={()=>{dispatch({type:'reset'})}}>reset</button>

        <Form />
    </div>
  )
}

const forminitailState = {
    name: '',
    phone: '',
    age: '',
    email: ''
}

const formreducer = (state, action) => {
    switch(action.type){
        case "input":
            return{
                ...state,
                [action.field]: action.value
            }
            break;
        case "reset":
            return forminitailState
    }
}

export function Form(){
    const [state, dispatch] = useReducer(formreducer, forminitailState)

    const handleChange =(e) =>{
        dispatch(
            {
                type: "input",
                field: e.target.name,
                value: e.target.value
            }
        )
    }
    const handlesubmit = (e) =>{
        e.preventDefault()

        console.log(state.name, state.phone)
    }

    // const handleclear = (e) =>{
        
    //     const [Form, dispatch] = UseReducer(formreducer, forminitailState)

    //     const handleChange = (e) =>{
    //         dispatch(
    //             {
    //                 type: "button",
    //                 field: e.target.name,
    //                 value: e.target.value
    //             }
    //         )
    //     }
    // }
    const MyComponent = () => {
        const [form, dispatch] = useReducer(useReducer, forminitailState); // useReducer should be declared here
      
        const handleClear = (e) => {
          e.preventDefault();
          dispatch({
            type: "button",
            field: e.target.name,
            value: "", // clear the input field
          });
        };
    
    return(
        <div>
            <input type="text" placeholder='name' name='name' onChange={handleChange}/><br/>
            <input type="number" placeholder='phone' name='phone' onChange={handleChange}/><br/>
            <input type="number" placeholder='age' name='age' onChange={handleChange}/><br/>
            <input type="text" placeholder='email' name='email' onChange={handleChange}/><br/>
            <button onClick={handlesubmit}>submit</button>
            <button onClick={()=>{dispatch({type:'reset'})}}>clear</button>
        </div>
    )
    };
}

