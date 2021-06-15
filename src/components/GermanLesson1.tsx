import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../database/firebaseContext";
import { Loading } from "../pages/Loading";
import { IWord } from "../interfaces/word";
import { LessonNav } from "./LessonNav";

export const GermanLesson1 = () => {
  const { db } = useContext(FirebaseContext);
  const [germanWords, setGermanWords] = useState<IWord[] | null>(null);
  useEffect(() => {
    if (!db) return;
    db.collection("germanWords")
      .get()
      .then((res) => setGermanWords(res.docs.map((doc) => doc.data() as IWord)))
      .catch((err) => console.error(err));
  }, [db]);
  if (!germanWords) return <Loading />;
  return (
    <div className="maxWidth1000 centerMargin">
      <LessonNav />
      <h1>Welcome To Your First Lesson In German!</h1>
      <p className="pb-sm pt-sm">
        I'm going to start by giving you some very simple and basic words for
        you to take a peak at before we get started. You can check them out
        underneath this piece of text.
      </p>

      {germanWords.map((word) => (
        <p key={word.word}>
          {word.word} - [
          {word.englishTranslations?.length
            ? word.englishTranslations.map((e) => (
                <span key={word.word + "'s translation: " + e}> {e} </span>
              ))
            : "no translation"}
          ]
        </p>
      ))}
    </div>
  );
};
