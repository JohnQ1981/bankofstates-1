import './App.css';
import {BrowserRouter as Router ,Switch , Route} from "react-router-dom";
import Header from "./header/Header";
import Home from "./home/Home";
import Login from "./login/Login";
import Footer from "./footer/Footer";
import Register from "./register/Register";
import Register1 from "./register/Register1";
import Contact from "./contact/Contact";
import Admin from "./admin/Admin";
import User from "./user/User";
import Logout from "./logout/Logout";
import Logout1 from "./logout/Logout1";
import Logout2 from "./logout/Logout2";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
         <Route path="/login" ><Login /></Route>
         <Route path="/logout" ><Logout /></Route>
         <Route path="/logout2" ><Logout2 /></Route>
         <Route path="/register"><Register /></Route>
         <Route path="/register1"><Register1 /></Route>
         <Route path="/contact"><Contact /></Route>
         <Route path="/user"><User /></Route>
         <Route path="/admin"><Admin /></Route>
         <Route path="/" component={Home}></Route>
        </Switch>
        <Footer />
       
     </div>
    </Router>
  );
}

export default App;
