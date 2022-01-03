import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/AuthContext';
import GoogleButton from 'react-google-button';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login, googleSignIn } = useUserAuth();
    const navigate = useNavigate();

    const googleLoginHandler = async (e) => {
        e.preventDefault()
        try {
            await googleSignIn()
                navigate("/start")

        } catch (err) {
            setError(err.message)
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            await login(email, password)
            navigate("/start")
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <><div>{error && <p>{error}</p>}</div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-white">
                <div className="bg-blue-400 w-full sm:w-3/4 max-w-lg p-12 pb-6 shadow-2xl rounded">
                    <div className="text-white pb-4 text-3xl font-semibold">Login To Attempt Quiz</div>
                    <form onSubmit={submitHandler}>
                        <input
                            className="block text-gray-700 p-1 m-4 ml-0 w-full rounded text-lg font-normal placeholder-gray-300"

                            type="email"
                            placeholder="your email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className="block text-gray-700 p-1 m-4 ml-0 w-full rounded text-lg font-normal placeholder-gray-300"

                            type="password"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            className="inline-block mt-2 bg-blue-600 hover:bg-blue-700 focus:bg-green-800 px-6 py-2 rounded text-white shadow-lg mb-2"
                        >
                            Login
                        </button>
                    </form>
                    <hr />
                    <br/>
                    <GoogleButton className='g-btn' type='dark' onClick={googleLoginHandler} />
                    <div className="pt-10 flex items-center justify-between">
                        <Link to="/reset"

                            className="inline-block text-green-700 hover:text-green-900 align-baseline font-normal text-sm"
                        >
                            Forgot password?
                        </Link>
                        <Link to="/signup" className="inline-block text-green-700 hover:text-green-900 font-normal text-sm">
                            Create an Account
                        </Link>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Login
