import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Login from './component/Login';
import './App.css';
import Joinuser from './page/Joinuser';
import PreventRoute from './component/PreventRoute';
import Joininfo from './page/Joinuserinfo';
import Error from './page/Error';


export default function App() {
  return (
    <>
    <Routes>
      
      <Route  path='/' element={<Login/>}/>
      <Route path='/feed' element={ 
        <PreventRoute>
        <Home/>
      </PreventRoute>
      }/>
      <Route path='/join' element={<Joinuser/>}/>
      <Route path='*' element={<Error/>}/>
   
    </Routes>

    </>

  )
}
