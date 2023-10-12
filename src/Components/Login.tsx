import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'


function Login() {
    const emailId = "mathan.r@spritle.com";
    const passWord = "mathan";
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [emailError, setEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');


    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const passwordRegex = /^.{6,}$/;

    const validateEmail = () => {
        if (!emailRegex.test(email)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    };

    const validatePassword = () => {
        if (!passwordRegex.test(password)) {
            setPasswordError('Password must be at least 6 characters');
        } else {
            setPasswordError('');
        }
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        validateEmail();
        validatePassword();
        if (emailId === email && passWord === password) {
            navigate("/Home");
        }
        else {
            if (email !== emailId) {
                alert(`Invalid Email`)
            }
            else {
                alert("Password Doesn't Match")
            }
        }
    };
    const HandleClickSignUp = () => {
        navigate("/signUp")
    }
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 shadow-md rounded-md">
                    <h2 className="text-2xl mb-4">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 p-2 w-80 border rounded-md"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={validateEmail}
                                required
                            />
                            <div className="error">{emailError}</div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 p-2  w-80 border rounded-md"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onBlur={validatePassword}
                                required
                            />
                            <div className="error">{passwordError}</div>
                        </div>
                        <button
                            type="submit"
                            className="w-80  bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                        >
                            Login
                        </button>
                        <div className=''>
                            <br />
                            <a href=''>Forgot Password?</a>
                        </div>
                        <br />
                        <button
                            className="w-80 bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                            onClick={HandleClickSignUp}>SignUp
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login