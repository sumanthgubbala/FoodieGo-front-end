import { useState } from 'react'
import { Heading, Button, Input } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel
} from '@chakra-ui/react'
import '../design/login.css'
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
=======
import { IoFastFoodOutline } from "react-icons/io5";
import { AuthenticationHook } from './ContextAuthentication';
import NavBar from './NavBar';
>>>>>>> 5b8e5758c8e5f2dd4aa8fb156e911d1998521dc6

const Login = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    sessionStorage.setItem('username', formData.username);
    const { login, setIsLoggedIn } = AuthenticationHook();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData, [name]: value
        }));
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const basicAuth = 'Basic ' + btoa(`${formData.username}:${formData.password}`);
            console.log(basicAuth);
            const response = await fetch('http://localhost:8080/menuItems/all', {

                headers: {
                    Authorization: basicAuth
                }
            });

            if (!response.ok) {
                throw new Error('networak error');
            }
            navigate('/home');
            login(formData.username);
            const res = await response.json();
            console.log(res);
        }
        catch (err) {
            window.alert('Invalid username or password');
            const errorResponse = err;
            setIsLoggedIn(false);
            console.error('error:', err);
        }
    }
    return (
<<<<<<< HEAD
        <div className='main-cont '>
            <Container className='login-cont items-center'>
                <Heading className='mb-4 text-2xl  text-center text-yellow-400 font-semibold  hover:text-yellow-200'>
                    Login
                </Heading>
                <form action="" onSubmit={submitHandler} className='border-2 rounded-md bg-transparent p-10 font-semibold'>
                    <FormControl className='form '>
                        <FormLabel htmlFor='username'
                            className='text-2xl text-red-400  font-semibold'
                        >Username</FormLabel>
                        <Input id='username' type='text' name='username' value={formData.username} onChange={handleChange} width={'15.0'} border={'black 1px solid'}
                            className=' p-1 mt-2 ' required />
                        <FormLabel htmlFor='password' className='mt-3'>Password</FormLabel>
                        <Input id='password' type='password' name='password' value={formData.password} onChange={handleChange} border={'black 1px solid'} width={'15.0'}
                            className=' p-1 mt-2 rounded-md' required />
                        <div class="text-sm">
                                    <a href="#" class="font-semibold text-red-600 hover:text-indigo-500">Forgot password?</a>
                        </div>
                        <Container mt={8} gap={4}>
                            <Button type='submit' className='mt-3 text-white bg-orange-400 border-2 border-orange-500 hover:bg-white hover:text-orange-400 font-semibold rounded-md px-6 py-2 duration-200 hidden md:block'>
                                Login
                            </Button>
                        </Container>
                    </FormControl>
                </form>
                Dont have an account? <a href="/signup" className='text-orange-500 font-semibold'>Sign Up</a>
            </Container>
=======
        <div className='min-h-screen flex items-center justify-center bg-white px-4 sm:justify-start sm:pl-32 main-cont'>
            <div class="w-full max-w-md">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center text-center">
                    <IoFastFoodOutline className="text-orange-400 text-5xl mb-4" />
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">FoodieGo</h1>
                    <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                </div>


                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border p-5 rounded-lg border-gray-300">
                    <form class="space-y-6" method="POST" onSubmit={submitHandler}>
                        <div>
                            <label for="email" class="block text-sm/6 font-medium text-gray-900">Username</label>
                            <div class="mt-2">
                                <input type="text" name="username" id="username" required className="block w-full rounded-md bg-transparent px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6 border border-black" value={formData.username} onChange={handleChange} />
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
                                <div class="text-sm">
                                    <a href="#" class="font-semibold text-red-600 hover:text-red-500">Forgot password?</a>
                                </div>
                            </div>
                            <div class="mt-2">
                                <input type="password" name="password" id="password" required class="block w-full rounded-md bg-transparent px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6" value={formData.password} onChange={handleChange} />
                            </div>
                        </div>

                        <div>
                            <button type="submit" class="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Sign in</button>

                        </div>
                        <span>{`$(errorResponse)`}</span>
                    </form>
                    <div className="mt-4 text-center text-sm text-gray-700">
                        Don't have an account?{' '}
                        <a href="/signup" className="text-green-500 font-semibold hover:underline">
                            Sign Up
                        </a>
                    </div>

                </div>

            </div>
>>>>>>> 5b8e5758c8e5f2dd4aa8fb156e911d1998521dc6
        </div>
    )
}

export default Login