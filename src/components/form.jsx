import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function SignUpForm (){
    const initialFormState = {
        name: "",
        email: "",
        password: "",
    };

    const [formData, setFormData] = useState(initialFormState)
    const [message, setMessage] = useState("")

    const handleChange = (event) =>{
        
        const {name, value} = event.target
        console.log(event.target)
        setFormData({
            ...formData,
            [name]: value
        })

        // console.log(formData)
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            const API_URL = import.meta.env.VITE_API_URL
            const API_KEY = import.meta.env.VITE_API_KEY
            const response = await axios.post(API_URL, formData, {
                headers: {
                   'x-api-key': API_KEY,
                }
            })

         setMessage("User Created Successfully")



        }catch(error){
            console.error(error)
            setMessage("Error creating user " + error.message)
        }
        
    }

    const handleReset = () => {
        setFormData(initialFormState);
        setMessage("");
    };

    return(
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-screen">
            {/* <h1>Name: {name}</h1> */}

            {/* <h1>Email: {email}</h1>  */}

            <label htmlFor="name">Full name</label>
            <input type="text" name="name" onChange={handleChange} value={formData.name}   />
            <br /> <br />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleChange} name="email" value={formData.email}   />

            <br /> <br />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={handleChange} value={formData.password} required  />

            <br /> <br />
            <div className="flex gap-4">
                <button type="submit">Submit</button>
                <button type="button" onClick={handleReset}>Reset</button>
            </div>

            <h1>{message}</h1>
        </form>

     )
}


export default SignUpForm;


