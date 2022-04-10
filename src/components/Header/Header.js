import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const{user,handleSignOut}=useFirebase()
    return (
        <div className='w-auto bg-blue-600 p-5 flex justify-around'>
            <Link className='mr-3 text-2xl ' to='/'>Home</Link>
          
            <Link className='text-2xl' to='/regester' >Regester</Link>
            <span>{user?.displayName && user.displayName}</span>
            {user?.uid ? <button onClick={handleSignOut} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
 Signout
</button>: <Link className='text-2xl' to='/login' >Login</Link> }
        
            
        </div>
    );
};

export default Header;