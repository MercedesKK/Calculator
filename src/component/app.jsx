import React, { Component } from 'react';
import NavBar from './navBar';
import { Navigate, Route,Routes } from 'react-router-dom';
import Register from './content/register';
import Home from './content/home';
import Login from './content/login';
import Notfound from './content/notfound';
import Calculator from './content/calculator';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <NavBar />
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/home' element={<Home />}/>
                        <Route path='/register' element={<Register />}/>
                        <Route path='/calculator' element={<Calculator />}/>
                        <Route path='/login' element={<Login />}/>
                        <Route path='/404' element={<Notfound />}/>
                        <Route path='*' element={<Navigate relative to='/404' />}/>
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;