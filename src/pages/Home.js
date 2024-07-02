import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export default function Home() {

    const[users,setUsers]=useState([])
    
    const {id}=useParams()
    useEffect(()=>{
  loadUsers()
    },[])

    const loadUsers= async()=>{
        const result= await axios.get("https://crud-project-latest.onrender.com/users")
        // console.log(result.data);
        setUsers(result.data);
    }

    const deleteUser=async (id)=>{

        await axios.delete(`https://crud-project-latest.onrender.com/user/${id}`)
        loadUsers()

    }
    return (
        <div className="container">
            <div className="py-4 table-responsive">
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user,index)=>(

                                <tr key={index}>
                                <th scope="row" >{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td className='d-flex justify-content-center'>
                                    <Link className='btn btn-primary mx-2 btn-sm' to={`/viewuser/${user.id}`}>View</Link>
                                    <Link className='btn btn-outline-primary mx-2 btn-sm' to={`/edituser/${user.id}`}>Edit</Link>
                                    <button className='btn btn-danger mx-2 btn-sm' onClick={()=>deleteUser(user.id)}>Delete</button>
                                    
                                </td>
                            </tr>
                            ))
                        }
                     
                        
                    </tbody>
                </table>

            </div>


        </div>
    )
}
