import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/AuthContext'



const Welcome = () => {
    const { user, logout } = useUserAuth()
    const navigate = useNavigate()
    const logoutHandler = (e) => {
        e.preventDefault()
        logout();
        navigate("/")
    }
    return (
        <>
        <div>
            Welcome {user.email}
            
            <button onClick={logoutHandler}
                class="inline-block mt-2 bg-red-600 hover:bg-red-700 focus:bg-red-800 px-6 py-2 rounded text-white shadow-lg mb-2"
            >
                Logout
            </button>
        </div>
       
        </>
    )
}

export default Welcome
