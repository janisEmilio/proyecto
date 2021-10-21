import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './styles/styles.css';
import Login from "./Pages/Login";
import Ventas from "./Pages/Ventas";
import Productos from "./Pages/Productos";
import Dashboard from "./Pages/Dashboard";




function App() {

 
  return (
    <Router>
    <Switch>
      <Route exact path='/Login' component={Login}></Route>
      <Route exact path='/Dashboard' component={Dashboard}>
      </Route>
      <Route exact path='/Productos' component={Productos}>
      </Route>
      <Route exact path='/Ventas' component={Ventas}>
      </Route>
    </Switch>
  </Router>
    
  );
}

export default App;
