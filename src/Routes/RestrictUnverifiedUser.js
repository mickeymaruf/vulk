import { useAuth } from '../contexts/UserContext';

const RestrictUnverifiedUser = ({ children }) => {
    const { user } = useAuth();
    if (user.emailVerified) {
        return children;
    }
    return (
        <div className='min-h-screen mt-10 text-slate-300 text-3xl text-center font-medium'>
            <p>Please verify your Email.</p>
            <p>A verification link has been sent to your <br /> Email address.</p>
        </div>
    );
};

export default RestrictUnverifiedUser;