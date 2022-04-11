import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Regester from './components/Regester/Regester';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Order from './components/Order/Order';

function App() {
  return (
   <>
   <Header></Header>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route
            path="/order"
            element={
             <RequireAuth>
               <Order/>
             </RequireAuth>
            }
          >
        </Route>
    <Route path='/regester' element={<Regester/>}></Route>
  </Routes>
   </>
  );
}

export default App;
