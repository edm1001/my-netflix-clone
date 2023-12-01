"use client"

import { useCallback, useState } from "react"; //fix useState error
import Input from "@/components/input";
import axios from "axios";

const Auth = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login');
    
    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login' )
    }, []);

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email,
                name, 
                password
            })
        }catch (error) {
            console.log(error)
        }
    }, [email, name, password])

    return (
        <div className="relative w-full h-full bg-[url('/images/netflix-hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full sm:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/netflix-logo.png" alt="logo" className="h-12"/>
                </nav>
                <div className=" flex justify-center">
                    <div className="bg-black bg-opacity-80 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-2-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === 'login' ? 'Sign In' : 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (

                            <Input
                            label="Username"
                            onChange={(ev)=> setName(ev.target.value)}
                            id="name"
                            value={name}
                            />
                            )}
                            <Input
                            label="Email"
                            onChange={(ev)=> setEmail(ev.target.value)}
                            id="email"
                            type="email"
                            value={email}
                            />
                            <Input
                            label="Password"
                            onChange={(ev)=> setPassword(ev.target.value)}
                            id="password"
                            type="password"
                            value={password}
                            />
                        </div>
                        <button onClick={register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">{variant === 'login' ? 'Login' : 'Sign up'}</button>
                        <p className="text-neutral-500 mt-12">
                            {variant === 'login' ? 'Login' : 'Sign up'}
                            First time using Netflix?
                            <span onClick={toggleVariant} className="hover:underline cursor-pointer text-white ml-2">
                             {variant === 'login' ? 'Create an Account!' : 'Login'}
                            </span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Auth;