import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {logo} from './assets';
import { Routes,Route, Link } from 'react-router-dom'
import { Home,CreatePost } from './pages'
function App() {
 
  return (
    <>
    <header className='w-full flex justify-between items-center sm:px-6 px-4 sm:py-6 py-4 border-b border-b-[#e6ebf4]'>
      <Link to="/">
    <img src={logo} className="w-28 object-contain" alt="logo"/>
      </Link>
      <Link to="/create-Post" className='px-4 py-2 rounded-md font-inter font-medium bg-[#6469ff] text-white'>
        Create
      </Link>
</header>
        <main className='sm:px-8 px-4 py-8 bg-[#f9fafe] w-full min-h-[calc(100vh-73px)]'>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/create-post' element={<CreatePost/>} />

    </Routes>
 </main>
    </>
  )}

export default App
