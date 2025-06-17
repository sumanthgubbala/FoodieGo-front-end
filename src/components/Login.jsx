import { useState } from 'react'
import { Heading, Button, Input } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel
} from '@chakra-ui/react'
import '../design/login.css'

const Login = () => {

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
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('network error');
            }
            const res = await response.json();
            console.log(res);
        }
        catch (err) {
            console.error('error:', err);
        }
    }
    return (
        <div className='main-cont'>
            <Container className='login-cont'>
                <Heading mb="4" size="lg" textAlign="center">
                    Login
                </Heading>
                <form action="" onSubmit={submitHandler}>
                    <FormControl className='form'>
                        <FormLabel htmlFor='username'>Username</FormLabel>
                        <Input id='username' type='text' name='username' value={formData.username} onChange={handleChange} width={'15.0'} border={'black 1px solid'} required />
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <Input id='password' type='password' name='password' value={formData.password} onChange={handleChange} border={'black 1px solid'} width={'15.0'} required />
                        <Container mt={8} gap={4}>
                            <Button type='submit' variant={'outline'} border={'black 1px solid'} color={'black'} width={'15.0'} _hover={{ bg: 'black', color: 'white' }}>
                                Submit
                            </Button>
                        </Container>
                    </FormControl>
                </form>
            </Container>
        </div>



    )
}

export default Login