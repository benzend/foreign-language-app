// External Packages
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

// Pages
import { Friends } from "./pages/Friends";
import { Home } from "./pages/Home";
import { SignOut } from "./pages/SignOut";
import { Leaderboards } from "./pages/Leaderboards";
import { SignInOrSignUp } from "./pages/SignInOrSignUp";

// Components
import { GermanLesson1 } from "./components/GermanLesson1";
import { GermanLessons } from "./components/GermanLessons";
import { Settings } from "./components/Settings";
import { SpanishLesson1 } from "./components/SpanishLesson1";
import { SpanishLessons } from "./components/SpanishLessons";
import { LanguageOptions } from "./components/LanguageOptions";
import { Admin } from "./pages/admin/Admin";
import { CreateLesson } from "./pages/admin/CreateLesson";
import { selectUser } from "./redux/userSlice";

function App() {
  const user = useSelector(selectUser);

  if (!user.value) return <SignInOrSignUp />;

  if (user.value.isAdmin)
    return (
      <Router>
        <Switch>
          <Route path="/admin/createLesson" component={CreateLesson} />
          <Route path="/admin" component={Admin} />
          <Route path="/" component={() => <Redirect to="/admin" />} />
        </Switch>
      </Router>
    );

  if (!user.value.currentTargetLanguage) return <LanguageOptions />;
  else
    return (
      <Router>
        <Switch>
          <Route path="/settings/languages" component={LanguageOptions} />
          <Route path="/settings" component={Settings} />
          <Route path="/spanish/lesson1" component={SpanishLesson1} />
          <Route path="/spanish/lessons" component={SpanishLessons} />
          <Route path="/german/lesson1" component={GermanLesson1} />
          <Route path="/german/lessons" component={GermanLessons} />
          <Route path="/friends" component={Friends} />
          <Route path="/leaderboards" component={Leaderboards} />
          <Route path="/signout" component={SignOut} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
}

export default App;
