import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signWithGoogle}=useFirebase()
    return (
        <div>
             <form className='w-2/4 mx-auto flex flex-col items-center'>
               
                <input className='border-red-800 px-2 py-2 rounded-lg border-2' type="email" name="" id="" placeholder='Enter Your email' /> <br />
                <input className='border-red-800 px-2 py-2 rounded-lg border-2' type="password" name="" id="" placeholder='Enter Password'/> <br />
                <input className='text-yellow-100 font-semibold cursor-pointer py-2 px-16 rounded-xl bg-blue-700' type="submit" value='Login' />
            </form>
           <div className="flex justify-center mt-5">
           <button onClick={signWithGoogle} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Sign with Google
</button>
           </div>
        </div>
    );
};

export default Login;