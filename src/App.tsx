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
import { LessonBuilder } from "./pages/admin/LessonBuilder";
import { addUser, selectUser } from "./redux/userSlice";
import { useAppDispatch } from "./redux/hooks";
import { useContext, useEffect, useState } from "react";
import { FirebaseContext, Firestore } from "./database/firebaseContext";
import { IUser } from "./interfaces/IUser";
import { Loading } from "./pages/Loading";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useAppDispatch();
  const { db } = useContext(FirebaseContext);
  const [userId, setUserId] = useState<string | null | undefined>(undefined);

  const getUser = async (
    id: string | null,
    db: Firestore,
    callback: (id: string | null) => void
  ) => {
    if (id) {
      const user = await db
        .collection("users")
        .doc(id)
        .get()
        .then((doc) => ({ id: doc.id, ...doc.data() } as IUser));
      dispatch(addUser(user));
    }
    callback(id);
  };

  useEffect(() => {
    const sessionId = window.sessionStorage.getItem("userId");
    if (!db) return;
    getUser(sessionId, db, (id) => setUserId(id));
  }, []);

  if (userId === undefined) return <Loading />;

  if (!user.value) return <SignInOrSignUp />;

  if (user.value.isAdmin)
    return (
      <Router>
        <Switch>
          <Route path="/signout" component={SignOut} />
          <Route path="/admin/lessonBuilder" component={LessonBuilder} />
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
