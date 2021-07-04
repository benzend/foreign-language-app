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
import { Settings } from "./components/Settings";
import { LanguageOptions } from "./components/LanguageOptions";
import { Admin } from "./pages/admin/Admin";
import { LessonBuilder } from "./pages/admin/LessonBuilder";
import { addUser, selectUser } from "./redux/userSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { useContext, useEffect, useState } from "react";
import { FirebaseContext, Firestore } from "./database/firebaseContext";
import { IUser } from "./interfaces/IUser";
import { Loading } from "./pages/Loading";
import { ILesson } from "./interfaces/ILesson";
import { getLessons } from "./util/getLessons";
import { Lessons } from "./pages/Lessons";
import { getUser } from "./util/getUser";

function App() {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const { db } = useContext(FirebaseContext);
  const [userId, setUserId] = useState<string | null | undefined>(undefined);
  const [lessons, setLessons] = useState<ILesson[] | null | undefined>(
    undefined
  );

  const getData = async (id: string | null, db: Firestore) => {
    await getUser(id, db, dispatch, (id) => setUserId(id));
    if (!user.value || !user.value.currentTargetLanguage) {
      setLessons(null);
      return;
    }
    await getLessons(db, user.value?.currentTargetLanguage, (data) =>
      setLessons(data)
    );
  };

  useEffect(() => {
    const sessionId = window.sessionStorage.getItem("userId");
    if (!db) return;
    getData(sessionId, db);
  }, []);

  console.log(lessons);

  if (userId === undefined || lessons === undefined) return <Loading />;
  else if (!user.value) return <SignInOrSignUp />;
  else if (user.value.isAdmin)
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
  else if (!user.value.currentTargetLanguage) return <LanguageOptions />;
  else
    return (
      <Router>
        <Switch>
          <Route path="/settings/languages" component={LanguageOptions} />
          {lessons?.map((lesson) => (
            <Route
              path={`/${user.value?.currentTargetLanguage}/lessons/${lesson.id}`}
            >
              <div>
                <h1>{lesson.difficulty}</h1>
                <h1>
                  {lesson.sentences.map((sentence) => {
                    return `${sentence.target} \n ${sentence.translation}`;
                  })}
                </h1>
                <h1>
                  {lesson.words.map((word) => {
                    return `${word.target} \n ${word.translation}`;
                  })}
                </h1>
                <h1>{lesson.targetLanguage}</h1>
                <h1>{lesson.translationLanguage}</h1>
              </div>
            </Route>
          ))}
          <Route
            path={`/${user.value.currentTargetLanguage}/lessons`}
            render={() => (
              <Lessons
                targetLang={user.value?.currentTargetLanguage}
                lessons={lessons}
              />
            )}
          />
          <Route path="/settings" component={Settings} />
          <Route path="/friends" component={Friends} />
          <Route path="/leaderboards" component={Leaderboards} />
          <Route path="/signout" component={SignOut} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
}

export default App;
