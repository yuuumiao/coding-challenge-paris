import logo from './logo.svg';
import './App.css';
import {Switch, Route, NavLink, Link} from 'react-router-dom'
import Home from './components/Home'
import Temperature from './components/Temperature'
import CustomizeImage from './components/CustomizeImage'
import NavMain from './components/NavMain'


function App() {
  return (

    <div className="App__content">
        <div className="App_navigation">
          <NavMain />
        </div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/temperature" component={Temperature} />
            <Route exact path="/customize-image" component={CustomizeImage} />
          
          </Switch>


    </div>
  );
}

export default App;
