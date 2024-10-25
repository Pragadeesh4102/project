import React, {useState} from "react"
import { useState } from "react"

export default function Api() {

    const [useformdata,setFormdata] = useState({
        Name: "",
        Email: "",
        Phone: "",
    })

    function handlechange(e) {

        const { name,value } = e.target

        setFormdata((prev))
    }

    return(
    <div>
        <h1>{mail}</h1>
        <button
            onClick={()=>{
                get(add());
            }}
        >get</button>
        <button
            onClick={()=>{
                post(view());
            }}
        >post</button>
    </div>
    )
}