import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar.jsx/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const {logIn} = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);
        logIn(email, password)
            .then(result => {
                console.log(result);
                navigate(location.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <Navbar></Navbar>

            <div className=" w-3/4 mx-auto">
                <h1 className="text-center text-3xl">Login Your Account</h1>
                <hr className="my-10" />
                <form className="space-y-3" onSubmit={handleLogin}>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-semibold">Email address</label>
                        <input type="email" name="email" id="email" placeholder="Enter you email address" required className="p-2 bg-[#F3F3F3]" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="font-semibold">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter you password" required className="p-2 bg-[#F3F3F3]" />
                    </div>
                    <div>
                        <button className="btn btn-primary w-full bg-[#403F3F] border-0">Login</button>
                    </div>
                </form>
                <div className="mt-3">
                    <h1 className="text-center">Do not Have An Account ? <Link to="/register" className="text-red-500">Register</Link></h1>
                </div>
            </div>

        </div>
    );
};

export default Login;