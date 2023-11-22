import { useState } from "react"; //fix useState error
import Input from "@/components/input";

const Auth = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="relative w-full h-full bg-[url('/images/netflix-hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full sm:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/netflix-logo.png" alt="logo" className="h-12" />
                </nav>
                <div className=" flex justify-center">
                    <div className="bg-black bg-opacity-60 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-2-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            Sign In
                        </h2>
                        <div className="flex flex-col gap-4">
                            <Input
                            label="Username"
                            onChange={(ev)=> setName(ev.target.value)}
                            id="name"
                            value={name}
                            />
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
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Auth;