import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


export default function EditUser() {
    const navigate=useNavigate();

    const {id}=useParams()

    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",

    })


    const{name,username,email}=user
    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})

    }
    const handleSubmit= async (e)=>{
        e.preventDefault()

        const post =await axios.put(`https://crud-project-latest.onrender.com/user/${id}`,user)
        navigate("/")

    }

    useEffect(()=>{
        loadUser()
    },[])

    const loadUser= async()=>{
        const result=await axios.get(`https://crud-project-latest.onrender.com/user/${id}`)
        setUser(result.data)
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Edit User</h2>
                    <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>
                            Name
                        </label>
                        <input type='text' className='form-control' placeholder='Enter your name' name='name' value={name} onChange={(e)=>onInputChange(e)}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Username' className='form-label'>
                            Username
                        </label>
                        <input type='text' className='form-control' placeholder='Enter your username' name='username' value={username} onChange={(e)=>onInputChange(e)}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Email' className='form-label'>
                        E-mail
                        </label>
                        <input type="email" className='form-control' placeholder='Enter your e-mail address' name='email' value={email} onChange={(e)=>onInputChange(e)}></input>
                    </div>
                    <button type='submit' className='btn btn-outline-primary'>Submit</button>
                    <Link  className='btn btn-outline-danger mx-2' to="/" >Cancel</Link>
                    </form>
                </div>
            </div>


        </div>
    )
}
