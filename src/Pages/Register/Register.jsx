import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar.jsx/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const {createUsers} = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoURl = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        // console.log(name, photoURl, email, password);

        //create user
        createUsers(email, password)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <Navbar></Navbar>

            <div className=" w-3/4 mx-auto">
                <h1 className="text-center text-3xl">Please Register</h1>
                <hr className="my-10" />
                <form className="space-y-3" onSubmit={handleRegister}>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="font-semibold">Full Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter your name" required className="p-2 bg-[#F3F3F3]" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="photo" className="font-semibold">Photo URL</label>
                        <input type="text" name="photo" id="photo" placeholder="Enter you photo URL" required className="p-2 bg-[#F3F3F3]" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-semibold">Email address</label>
                        <input type="email" name="email" id="email" placeholder="Enter you email address" required className="p-2 bg-[#F3F3F3]" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="font-semibold">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter you password" required className="p-2 bg-[#F3F3F3]" />
                    </div>
                    <div>
                        <button className="btn btn-primary w-full bg-[#403F3F] border-0">Register</button>
                    </div>
                </form>
                <div className="mt-3">
                    <h1 className="text-center">Already Have An Account? <Link to="/login" className="text-red-500">Login</Link></h1>
                </div>
            </div>

        </div>
    );
};

export default Register;