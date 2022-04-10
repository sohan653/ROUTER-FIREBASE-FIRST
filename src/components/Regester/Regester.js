import React from 'react';

const Regester = () => {
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center py-5">Please Register</h2>
            <form className='w-2/4 mx-auto flex flex-col items-center'>
                <input className='border-red-800 px-2 py-2 rounded-lg border-2 focus:bottom-0 focus:outline-1 focus:outline-orange-700' type="text" name="" id="" placeholder='Enter Your Name' /> <br />
                <input className='border-red-800 px-2 py-2 rounded-lg border-2' type="email" name="" id="" placeholder='Enter Your email' /> <br />
                <input className='border-red-800 px-2 py-2 rounded-lg border-2' type="password" name="" id="" placeholder='Enter Password'/> <br />
                <input className='text-yellow-100 font-semibold cursor-pointer py-2 px-16 rounded-xl bg-blue-700' type="submit" value='register' />
            </form>
        </div>
    );
};

export default Regester;