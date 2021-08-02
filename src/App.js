import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home';
import Faq from './components/Faq';
import Qna from './components/Qna';
import Seniors from './components/Seniors';
import Interview from './components/Interview';
import Experience from './components/Experience';
import Opportunities from './components/Opportunities';

import {BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>

      <Switch>

        <Route exact path="/faq">
          <Faq/>
        </Route>

        <Route exact path="/qna">
          <Qna/>
        </Route>

        <Route exact path="/experience">
          <Experience/>
        </Route>

        <Route exact path="/interview">
          <Interview/>
        </Route>

        <Route exact path="/seniors">
          <Seniors/>
        </Route>

        <Route exact path="/opportunities">
          <Opportunities/>
        </Route>

        <Route exact path="/contact">
          <Contact/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>

      </Switch>

      <Footer/>
    </Router>
  );
}

export default App;
