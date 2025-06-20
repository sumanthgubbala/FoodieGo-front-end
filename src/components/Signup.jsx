import React,{useState} from 'react'
import { IoFastFoodOutline } from "react-icons/io5";

const Signup = () => {
    //password matching
    const [signupData, setSignupData] = useState({
        email: '',
        name: '',
        username: '',
        password: '',
        confirm_password: '',
        address: '',
        mobile_no: '',
        role: ''
    });

    const [passData,setPassData] = useState({
        password: '',
        confirm_password: ''
    });
    const [err,setErr] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupData({
            ...signupData,[name]:value,
        })
        setPassData({
            ...passData,[name]:value,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(passData.password!== passData.confirm_password) {
            setErr('Passwords do not match');
            return;
        }
        else
        {
            setErr('');
            console.log('Form submitted successfully', signupData);
            // total form data
            console.log(passData)
        }
    }
    return (
        <div>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center text-center">
                    <IoFastFoodOutline className="text-orange-400 text-5xl mb-4" />
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">FoodieGo</h1>
                    <h3 className="mt-2 text-lg font-medium tracking-tight text-gray-900">Sign up to your account</h3>
                </div>


                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
                        <div>
                            <label for="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input type="email" name="email" id="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={handleChange}/>
                            </div>
                            <label for="username" className="block text-sm/6 font-medium text-gray-900">Username</label>
                            <div className="mt-2">
                                <input type="text" name="username" id="username"  required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={handleChange}/>
                            </div>
                            <label for="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                            <div className="mt-2">
                                <input type="password" name="password" id="password"  required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={handleChange}/>
                                <label for="confirm_password" className="block text-sm/6 font-medium text-gray-900 mt-4">Confirm Password</label>
                                <input type="password" name="confirm_password" id="confirm_password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={handleChange}/>
                            </div>
                            {err && <p className="text-red-500 text-sm mt-2">{err}</p>}
                            <label for="username" className="block text-sm/6 font-medium text-gray-900">Address</label>
                            <div className="mt-2">
                                <textarea type="text" name="address" id="address"  required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={handleChange}/>
                            </div>
                            <label for="mobile_no" className="block text-sm/6 font-medium text-gray-900">Mobile</label>
                            <div className="mt-2">
                                <input type="text" name="mobile_no" id="mobile_no"  required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={handleChange}/>
                            </div>
                            <label for="role" className="block text-sm/6 font-medium text-gray-900">Role</label>
                            <div className="mt-2">
                                <select name="role" id="role" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={handleChange}>
                                    <option value="">-- Select Role --</option>
                                    <option value="account_settings">Customer</option>
                                    <option value="support">Service</option>
                                </select>
                            </div>
                        </div>

                        <div>

                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2">Sign in</button>
                        </div>
                    </form>
                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Already have an account?{' '}
                        <a href="/login" className="font-semibold leading-6 text-green-600 hover:text-green-500">Login</a>
                    </p>
                </div>
            </div>
        </div>
    )
}   

export default Signup;

