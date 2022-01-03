import React, { useState } from 'react'
import { useUserAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const { resetPassword } = useUserAuth();

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            await resetPassword(email)
        } catch (err) {
            setError(err.message)
           
        }

    }

    return (
        <>
            <div>{error && <p>{error}</p>}</div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-white">
                <div className="bg-blue-400 w-full sm:w-3/4 max-w-lg p-12 pb-6 shadow-2xl rounded">
                    <div className="text-white pb-4 text-3xl font-semibold">Reset Your Password</div>
                    <form onSubmit={submitHandler}>
                        <input
                            className="block text-gray-700 p-1 m-4 ml-0 w-full rounded text-lg font-normal placeholder-gray-300"

                            type="email"
                            placeholder="your email"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button
                            className="inline-block mt-2 bg-blue-600 hover:bg-blue-700 focus:bg-green-800 px-6 py-2 rounded text-white shadow-lg mb-2"
                        >
                            Reset Password
                        </button>
                    </form>
                    <hr />

                    <div className="pt-10 flex items-center justify-between">

                        <Link to="/signup" className="inline-block text-green-700 hover:text-green-900 font-normal text-sm">
                            Create an Account
                        </Link>

                    </div>
                </div>

            </div>
        </>
    )
}

export default ResetPassword
