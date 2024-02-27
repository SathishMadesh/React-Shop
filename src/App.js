import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" Component={Home}/> 
        <Route exact path="/products" Component={Products}/>
        <Route exact path="/product/:id" Component={Product}/>
      </Routes>
    </div>
  );
}

export default App;
