import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Update() {
const [name,setname] = useState('')
const [phone,setphone] = useState(0)
const [email,setemail] = useState('')

    const {id} = useParams();

    useEffect(()=>{
        axios.get('https://66e580d15cc7f9b6273d8506.mockapi.io/crud/'+id)
        .then((res)=>{
            setname(res.data.name)
            setemail(res.data.email)
            setphone(res.data.phone)
        }).catch(err=>console.log(err)
        )
    },[id])

    async function updateevent(){

       await axios.put('https://66e580d15cc7f9b6273d8506.mockapi.io/crud/'+id,{
        name:name,
        phone:phone,
        email:email
        })
        .then(()=>{
            alert('updated')
            window.location = '/get'
           
        }).catch(err=>console.log(err)
        )

    }
  return (
    <div>
        <input type="text" value={name}  onChange={(e)=>setname(e.target.value)} />
        <input type="number" value={phone}  onChange={(e)=>setphone(e.target.value)} />
        <input type="email"  value={email}  onChange={(e)=>setemail(e.target.value)}/>

        <button onClick={updateevent}>update</button>
    </div>
  )
}
