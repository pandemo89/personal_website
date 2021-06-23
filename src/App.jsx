import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import WorkExperience from "./components/WorkExperience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import './App.css';

const  App = () =>{
  return (
   <Router>
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/works" component={WorkExperience} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
   </Router>
  );
}

export default App;
