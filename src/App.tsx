import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { GermanLesson1 } from "./components/GermanLesson1";
import { GermanLessons } from "./components/GermanLessons";
import { Settings } from "./components/Settings";
import { SignInOrSignUp } from "./components/SignInOrSignUp";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/home" component={Home} />
          <Route path="/settings" component={Settings} />
          <Route path="/german/lessons" component={GermanLessons} />
          <Route path="/german/lessons/lesson1" component={GermanLesson1} />
          <Route path="/" component={SignInOrSignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
