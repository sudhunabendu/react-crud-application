import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Course from './Course';
import Navbar from './Navbar';
import Login from './Login';
// import MultipleInput from './components/MultipleInput';
// import Submit from './components/Submit';
// import Conditional from './components/Conditional';
// import Myform from './components/Myform';
// import Lifecycle from './components/Lifecycle';
// import Cart from './Cart';
// import Product from './Product';
// import Home from './components/Home';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/course" component={Course}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/login" component={Login}></Route>

        <Redirect to="/"></Redirect>
      </Switch>
    </>
  );
}

export default App;
