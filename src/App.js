import Sidebar from './Components/Sidebar/Sidebar';
import Chatroom from './Components/Chatroom/Chatroom';
import Home from './Components/Home/Home';
import SwitchUser from './Components/Switch/Switch';
import Statistics from './Components/Statistics/Statistics';
import About from './Components/About/About';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import { projectAuth } from './firebase/config';

function App() {

  return (
    <Router>
      <div className="App">
        <div>
          <Sidebar />
        </div> 
        <div>
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route exact path="/chat" render={() => (
              projectAuth.currentUser !== null ? (<Chatroom />) : (<Redirect to="/switch" />)
            )} />
            <Route exact path="/switch">
              <SwitchUser />
            </Route> 
            <Route exact path="/statistics">
              <Statistics />
            </Route> 
            <Route exact path="/about">
              <About />
            </Route>            
          </Switch>
        </div>      
      </div>
    </Router>
  );
}

export default App;
