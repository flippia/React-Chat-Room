import Sidebar from './Components/Sidebar/Sidebar';
import Chatroom from './Components/Chatroom/Chatroom';
import Home from './Components/Home/Home';
import SwitchUser from './Components/Switch/Switch';
import Statistics from './Components/Statistics/Statistics';
import About from './Components/About/About';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Sidebar />
        </div> 
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/chat">
              <Chatroom />
            </Route>
            <Route path="/switch">
              <SwitchUser />
            </Route> 
            <Route path="/statistics">
              <Statistics />
            </Route> 
            <Route path="/about">
              <About />
            </Route>            
          </Switch>
        </div>      
      </div>
    </Router>
  );
}

export default App;
