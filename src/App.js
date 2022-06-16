import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import Create from './pages/create/Create';
import Navbar from './components/Navbar';
import Signup from './pages/signup/Signup';
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/recipes/:id' element={<Recipe/>}/> 
      <Route path='/register' element={<Signup/>}/>
     </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
