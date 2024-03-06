
import { BrowserRouter , Route, Routes } from 'react-router-dom'; 
import './App.css';
import Header from './Components/Header';
import AboutPage from './Components/AboutPage';
import Homepage from './Homepage';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';

function App() {
  return (
    <BrowserRouter> 
    
        <Header/>
        <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
    
      </BrowserRouter>
  );
}

export default App;