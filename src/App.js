
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'; 
import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import AboutPage from './Components/AboutPage';
import Homepage from './Homepage';

function App() {
  return (
    <Router> 
    <div>
    
        <Header/>
        <Homepage/>
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/">
          <Homepage/>
          </Route>
        </Switch>
        
    </div>
      </Router>
  );
}

export default App;