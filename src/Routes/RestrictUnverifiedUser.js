import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/UserContext';

const RestrictUnverifiedUser = ({ children }) => {
    const { user } = useAuth();
    if (user.emailVerified) {
        return children;
    }
    return <Navigate to="/"></Navigate>
};

export default RestrictUnverifiedUser;