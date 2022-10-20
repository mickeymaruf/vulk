import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../contexts/UserContext';
import SocialAuth from './SocialAuth';

const Register = () => {
    const { createUser, updateUser, verifyUser } = useAuth();
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        if (!name || !email || !password || !confirmPassword) {
            toast.warn('Field can\' be empty!');
            return;
        }
        if (password !== confirmPassword) {
            toast.warn('Password didn\'t match!');
            return;
        }
        createUser(email, password)
            .then(result => {
                updateUser(name)
                    .then(() => {
                        // 
                    })
                    .catch(error => {
                        toast.error(error.message);
                        console.log(error.message);
                    })
                verifyUser()
                    .then(() => {
                        toast.success('An registration link has been sent, verify!');
                    })
                    .catch(error => {
                        toast.error(error.message);
                        console.log(error.message);
                    })
            })
            .catch(error => {
                toast.error(error.message);
                console.log(error.message);
            })
    }
    return (
        <div className="bg-slate-900 pb-20">
            <form onSubmit={handleSignUp} className="bg-slate-800 w-11/12 sm:w-8/12 md:w-7/12 lg:w-5/12 xl:w-4/12 px-10 pt-8 pb-6 rounded-lg mx-auto mt-16">
                <h1 className='text-4xl text-center mb-5'>Signup</h1>
                <div className='mb-3'>
                    <label className="block">
                        <span className="text-slate-400">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Enter your name"
                        className="w-full p-3 outline-0 border-2 border-slate-700 focus:border-indigo-500 rounded-lg bg-slate-900 mt-1" />
                </div>
                <div className='mb-3'>
                    <label className="block">
                        <span className="text-slate-400">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="Enter your email"
                        className="w-full p-3 outline-0 border-2 border-slate-700 focus:border-indigo-500 rounded-lg bg-slate-900 mt-1" />
                </div>
                <div className='mb-3'>
                    <label className="block">
                        <span className="text-slate-400">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="*********"
                        className="w-full p-3 outline-0 border-2 border-slate-700 focus:border-indigo-500 rounded-lg bg-slate-900 mt-1" />
                </div>
                <div className='mb-3'>
                    <label className="block">
                        <span className="text-slate-400">Confirm password</span>
                    </label>
                    <input type="password" name='confirmPassword' placeholder="*********"
                        className="w-full p-3 outline-0 border-2 border-slate-700 focus:border-indigo-500 rounded-lg bg-slate-900 mt-1" />
                </div>
                <div className="mt-5">
                    <button className="w-full bg-indigo-600 py-3 rounded-md font-medium hover:shadow-lg hover:shadow-slate-700">Sign Up</button>
                </div>
                <SocialAuth />
                <div className="mt-5 text-slate-400 text-center">
                    <p>
                        Already have an account? <Link to="/login" className='underline text-blue-500'>Login</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Register;