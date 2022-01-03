import React from 'react';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Welcome from './components/Welcome';
import { Link } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import ResetPassword from './components/ResetPassword';


const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/reset" element={<ResetPassword />} />
                <Route path="/start" element={<ProtectedRoute><Welcome /></ProtectedRoute>} />
                <Route path="*" element={<main style={{ padding: "1rem" }}>
                    <p>There's nothing here! <Link to="/" className='text-red-500'> Return Back</Link></p>
                </main>} />
            </Routes>
        </>
    )
}

export default App
