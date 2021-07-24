// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import './Components/Asset/css/bootstrap.css';
import './Components/Asset/css/Apple.css';
import Main from './Components/Main/Main2';
import Header from './Components/Header/js/Header';

import Iphone from './Components/Iphone/Iphone';
import Footer from './Components/Footer/footer';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css' 
// import Main from "./Components/Main/Main2";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Main} />
      <Route path="/Iphone" exact component={Iphone} />
      <Footer />

    </Router>
  );
}

export default App;
