import React from 'react';
import './App.css';
import FlexContainer from './layout/FlexContainer';
import Home from './components/Home';
import IronContacts from './components/IronContacts';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <FlexContainer>
          <nav>
            <Link to="/"><img src="../assets/ironhack-logo.svg" alt="ironhack-logo"/></Link>
            <Link to="/">Home</Link>
            <Link to="/iron-contacts">IronContacts</Link>
          </nav>
        </FlexContainer>

        <Route exact path="/" component={Home} />
        <Route path="/iron-contacts" component={IronContacts} />

      </Router>
    </div>
  );
}

export default App;
