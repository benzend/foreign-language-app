import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { GermanLesson1 } from "./components/GermanLesson1";
import { GermanLessons } from "./components/GermanLessons";
import { Settings } from "./components/Settings";
import { SignInOrSignUp } from "./components/SignInOrSignUp";
import { Friends } from "./pages/Friends";
import { Home } from "./pages/Home";
import { Leaderboards } from "./pages/Leaderboards";
import { SignIn } from "./pages/SignIn";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/german/lessons/lesson1" component={GermanLesson1} />
          <Route path="/german/lessons" component={GermanLessons} />
          <Route path="/signin" component={SignIn} />
          <Route path="/home" component={Home} />
          <Route path="/friends" component={Friends} />
          <Route path="/leaderboards" component={Leaderboards} />
          <Route path="/settings" component={Settings} />
          <Route path="/" component={SignInOrSignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
