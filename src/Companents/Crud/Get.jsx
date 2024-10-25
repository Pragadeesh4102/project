import axios from 'axios'
import React from 'react'
// import useGet  from '../Hooks/UseContext';
import { Link } from 'react-router-dom';
import Usefetch from '../Hooks/Usefetch';

export default function Get() {
  // const {api} = useApi()
  // const {api1} = useApi()
  // const data = useGet(api)
  const api = 'https://66e580d15cc7f9b6273d8506.mockapi.io/crud'
  const [data] = Usefetch(api)
  // console.log(data)
  return (
    <div>
      <table className='table table-bordered'>
        <thead>

          <tr>
            <th>s.no</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            data.map((items, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{items.name}</td>
                <td>{items.phone}</td>
                <td>{items.email}</td>
                <td>

                  <Link to={`/update/${items.id}`}>update</Link>
                  <button className='btn btn-danger m-2' onClick={() => {
                    axios.delete(`https://66e580d15cc7f9b6273d8506.mockapi.io/crud/${items.id}`)
                      .then(alert("deleted"))
                      .catch(console.log("err"))
                  }}>delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
