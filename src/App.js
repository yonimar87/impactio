import './App.css';
import MemberNavbar from './Shared/Navbar'

import { BrowserRouter as Router, Route, Switch, Link, useParams } from "react-router-dom";
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import ItemList from './components/ItemList';
import Item from './components/Item';

const store = configureStore();


function App() {
  return (
    <Router>
      <Provider store={store}>
      <div className="container">
        <MemberNavbar />
        <Route exact path="/" component={ItemList} />
        <Route exact path="/members" component={ItemList} />
        <Route exact path="/member/:id" component={Item} />
      </div>
      </Provider>,
    </Router>

  );
}

export default App;
