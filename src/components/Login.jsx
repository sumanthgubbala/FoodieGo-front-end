import { useState } from 'react'
import { Heading, Button, Input } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel
} from '@chakra-ui/react'
import '../design/login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });


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
                throw new Error('network error');
            }
            navigate('/');
            const res = await response.json();
            console.log(res);
        }
        catch (err) {
            console.error('error:', err);
        }
    }
    return (
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
                            <div className='font-bold'>
                                <a href='/signup' className='text-black-400 text-sm'>Don't hava a Account ?</a>
                            </div>
                        </Container>
                    </FormControl>
                </form>
                Dont have an account? <a href="/signup" className='text-orange-500 font-semibold'>Sign Up</a>
            </Container>
        </div>
        


    )
}

export default Login