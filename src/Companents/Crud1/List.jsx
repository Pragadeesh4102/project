import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Usefetch from '../Hooks/Usefetch'
import { useActionData } from 'react-router-dom'

export default function List() {

    const api = 'https://66e580d15cc7f9b6273d8506.mockapi.io/crud'
    const [data] = Usefetch(api)

    const [customer,setcustomer] = useState('')
    const [product,setproduct] = useState('')
    const [date,setdate] = useState('')
    const [amt,setamt] = useState('')

    function submit(){
        axios.List('https://66e580d15cc7f9b6273d8506.mockapi.io/crud',{
          customer:customer,
          product:product,
          date:date,
          amt,amt
        }).then(()=>{
            alert('success');
            window.location = '/list'
          })
          .catch(err=>console.log(err))
      }
      

    return (
        <div className="buy">
            <div>

                <label>customer</label>
                <input type="text" />

                <label>product</label>
                <input type="text" />

                <label>buy date</label>
                <input type="date" />

                <label>amount</label>
                <input type="text" />

                <button onClick={submit}>submit</button>

            </div>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>no</th>
                        <th>customer</th>
                        <th>product</th>
                        <th>date</th>
                        <th>amt</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((products, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{products.customer}</td>
                                <td>{products.product}</td>
                                <td>{products.date}</td>
                                <td>{products.amt}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    )
}
