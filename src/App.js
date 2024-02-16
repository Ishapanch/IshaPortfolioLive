
import { BrowserRouter , Route, Routes } from 'react-router-dom'; 
import './App.css';
import Header from './Components/Header';
import AboutPage from './Components/AboutPage';
import Homepage from './Homepage';

function App() {
  return (
    <BrowserRouter> 
    
        <Header/>
        <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<Homepage />} />
        </Routes>
    
      </BrowserRouter>
  );
}

export default App;