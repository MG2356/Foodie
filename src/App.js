import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';
import Addrestaurant from './Addrestaurant';
import Addreciept from './Addreciept';
function App() {
  return (
    <>
<BrowserRouter>
<Routes>
<Route path='/' element={<LandingPage/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/Signup' element={<Signup/>}/>
<Route path='/Addrestaurant' element={<Addrestaurant/>}/>
<Route path='/Addreciept' element={<Addreciept/>}/>

</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
