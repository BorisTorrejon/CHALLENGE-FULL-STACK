import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './views/home/Home';
import Abm from './views/abm/Abm';
import TransactionState from "./context/transactions/TransactionState";

function App() {
  return (
    <TransactionState>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/abm'>
          <Abm />
        </Route>
      </Switch>
    </Router>
    </TransactionState>
  )
}

export default App;
