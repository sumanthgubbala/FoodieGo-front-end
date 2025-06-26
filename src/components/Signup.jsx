import React, { useState } from 'react';
import { IoFastFoodOutline } from "react-icons/io5";
import { SignupApi } from '../utils/apis';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [signupData, setSignupData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
        confirm_password: '',
        address: '',
        phoneNumber: '',
        role: ''
    });

    const navigate = useNavigate();
    const [err, setErr] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupData({ ...signupData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (signupData.password !== signupData.confirm_password) {
            setErr('Passwords do not match');
            return;
        }

        setErr('');
        try {
            const res = await SignupApi(signupData);
            console.log('Signup response:', res);
            alert('Signup successful! Redirecting to login page...');
            navigate('/login');
        } catch (error) {
            console.error('Signup failed:', error);
            alert('Signup failed. Please try again.');
        }
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center text-center">
                <IoFastFoodOutline className="text-orange-400 text-5xl mb-4" />
                <h1 className="text-2xl font-bold text-gray-900">FoodieGo</h1>
                <h3 className="mt-2 text-lg font-medium text-gray-900">Sign up to your account</h3>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border p-5 rounded-lg border-gray-300">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <input type="text" name="first_name" placeholder="First Name" required onChange={handleChange} />
                    <input type="text" name="last_name" placeholder="Last Name" required onChange={handleChange} />
                    <input type="text" name="username" placeholder="Username" required onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
                    <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
                    <input type="password" name="confirm_password" placeholder="Confirm Password" required onChange={handleChange} />
                    {err && <p className="text-red-500 text-sm mt-2">{err}</p>}
                    <textarea name="address" placeholder="Address" required onChange={handleChange}></textarea>
                    <input type="text" name="phoneNumber" placeholder="Phone Number" required onChange={handleChange} />
                    <select name="role" required onChange={handleChange}>
                        <option value="">-- Select Role --</option>
                        <option value="CUSTOMER">Customer</option>
                        <option value="SERVICE">Service</option>
                    </select>

                    <button type="submit" className="bg-orange-600 text-white py-1.5 px-3 rounded w-full">Sign Up</button>
                </form>
                <p className="mt-5 text-center text-sm text-gray-500">
                    Already have an account? <a href="/login" className="text-green-600 font-semibold">Login</a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
