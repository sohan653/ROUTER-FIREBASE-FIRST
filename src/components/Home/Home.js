import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const {user}=useFirebase()
    return (
        <div>
          <h2>hey</h2>
          <h2>this is {user? user.displayName: 'nobody'}</h2>
        </div>
    );
};

export default Home;