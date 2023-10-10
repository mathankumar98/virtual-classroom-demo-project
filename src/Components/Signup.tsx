import React, { ChangeEvent, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useSignupMutation } from "../RTK/ApiSlice";

interface SignupState {
    email: string;
    password: string;
    confirmPassword: string;
}

function Signup() {
    const navigate = useNavigate();
    const [signup, { isLoading, isError }] = useSignupMutation();
    const [state, setState] = useState<SignupState>({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSignup = async () => {
        try {
            const formData = {
                email: state.email,
                password: state.password,
                confirmPassword: state.confirmPassword,
            };
            const response = await signup(formData);

            setState({
                email: '',
                password: '',
                confirmPassword: '',
            });

        } catch (error) {
            console.error("Signup error:", error);
        }
    };

    const handleClickBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 shadow-md rounded-md">
                    <h2 className="text-2xl mb-4">SignUp</h2>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            if (state.password !== state.confirmPassword) {
                                return alert("Password doesn't match");
                            }
                            handleSignup();
                        }}
                    >
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 p-2 w-80 border rounded-md"
                                value={state.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Create Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="mt-1 p-2 w-80 border rounded-md"
                                value={state.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="mt-1 p-2 w-80 border rounded-md"
                                value={state.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button
                            className="w-80 bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                        >
                            Sign Up
                        </button>
                        <br />
                        <br />
                        <button
                            className="w-80 bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                            onClick={handleClickBack}
                        >
                            Back
                        </button>
                        {isError && <p>Error signing up.</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup