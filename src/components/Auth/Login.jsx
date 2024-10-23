import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    // console.log(handleLogin)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        //this will prevent the page from reloading on submitting the form
        e.preventDefault();
        //handleLogin function is passed from App.jsx
        handleLogin(email, password);
        //this will reset the email and password back to emptystring
        setEmail(''); 
        setPassword('');
    }


    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 p-20 rounded-xl border-emerald-600'>
                <form
                    onSubmit={(e) => {
                        submitHandler(e);
                    }}
                    className='flex flex-col items-center justify-center'>
                    <input 
                    value={email}
                    onChange={(e) => { 
                        //update the email string while user is inputting the email
                        setEmail(e.target.value);
                    }}
                    required //this is written so without this element the form does not get submitted
                    className='outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                    <input 
                    value={password}
                    onChange={(e) => {
                        //update the password string while user is inputting the password
                        setPassword(e.target.value);
                    }}
                    required //this is written so without this element the form does not get submitted
                    className='outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 mt-3 text-xl placeholder:text-gray-400' type="password" placeholder='Enter password' />
                    <button className='text-white outline-none border-none bg-emerald-600 rounded-full py-3 px-5 mt-5 text-xl'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
