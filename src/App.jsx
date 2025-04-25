import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';

import './App.css'
import { Route, Router } from 'react-router-dom';

function App() {

  return (
    <>
      <div>
        <Navbar/>
      </div>
      <Router>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Router>
    </>
  )
}

export default App
