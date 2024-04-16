import{ useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthContextProvider';




const PrivateRoutesForEstateDetails = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    // console.log(loading);
    if (loading) {
        return <span>loading/............</span>
    }
    if (user) {
        return children
    }
    // console.log('2', loading);
    return <Navigate to={'/login'} state={location.pathname}></Navigate>
};

export default PrivateRoutesForEstateDetails;