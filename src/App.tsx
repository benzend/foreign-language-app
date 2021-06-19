// External Packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import { GermanLesson1 } from "./components/GermanLesson1";
import { GermanLessons } from "./components/GermanLessons";
import { Settings } from "./components/Settings";
import { SignInOrSignUp } from "./pages/SignInOrSignUp";
import { SpanishLesson1 } from "./components/SpanishLesson1";
import { SpanishLessons } from "./components/SpanishLessons";
import { Friends } from "./pages/Friends";
import { Home } from "./pages/Home";
import { Leaderboards } from "./pages/Leaderboards";
import { SignIn } from "./pages/SignIn";
import { LanugageOptions } from "./components/LanguageOptions";
import { SignOut } from "./pages/SignOut";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./redux/selectors";

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  console.log(isLoggedIn);

  if (!isLoggedIn) return <SignInOrSignUp />;
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signInOrSignUp" component={SignInOrSignUp} />
        <Route path="/spanish/lesson1" component={SpanishLesson1} />
        <Route path="/spanish/lessons" component={SpanishLessons} />
        <Route path="/german/lesson1" component={GermanLesson1} />
        <Route path="/german/lessons" component={GermanLessons} />
        <Route path="/friends" component={Friends} />
        <Route path="/leaderboards" component={Leaderboards} />
        <Route path="/settings/signout" component={SignOut} />
        <Route path="/settings/languages" component={LanugageOptions} />
        <Route path="/settings" component={Settings} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
