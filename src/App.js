import './App.css';
import MemberList from './Containers/memberslist'
import MemberNavbar from './Shared/Navbar'
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Provider } from "react-redux";

function App() {
  return (
    <Router>
      <div className="container">
        <MemberNavbar />
        <Route exact path="/" component={MemberList} />
        <Route exact path="/members" component={MemberList} />
      </div>
    </Router>
  );
}

export default App;
