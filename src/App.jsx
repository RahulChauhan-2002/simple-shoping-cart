import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';

import './App.css'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <div className='bg-slate-900 '>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
