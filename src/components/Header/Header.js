import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
const auth=getAuth(app)

const Header = () => {
    const [user]=useAuthState(auth)
    return (
        <div className='w-auto bg-blue-600 p-5 flex justify-around'>
            <Link className='mr-3 text-2xl ' to='/'>Home</Link>
            <Link className='mr-3 text-2xl ' to='/order'>Order</Link>
          
            <Link className='text-2xl' to='/regester' >Regester</Link>
            <span>{user?.displayName && user.displayName}</span>
            {user?.uid ? <button onClick={()=> signOut(auth).then(()=>{})} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
 Signout
</button>: <Link className='text-2xl' to='/login' >Login</Link> }
        
            
        </div>
    );
};

export default Header;