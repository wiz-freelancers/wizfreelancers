
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
//<Navbar/>
export default App;
