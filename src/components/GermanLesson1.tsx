import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../database/firebaseContext";
import { Loading } from "../pages/Loading";
import { IWord } from "../interfaces/IWord";
import { LessonNav } from "./LessonNav";
import { ISentence } from "../interfaces/ISentence";
import { ILesson } from "../interfaces/ILesson";

export const GermanLesson1 = () => {
  const { db } = useContext(FirebaseContext);
  const [germanWords, setGermanWords] = useState<IWord[] | null>(null);
  const [sentences, setSentences] = useState<ISentence[] | null>(null);
  useEffect(() => {
    if (!db) return;
    db.collection("targetLanguages")
      .doc("h4hpM3lF346NxPkb0HcD")
      .collection("lessons")
      .doc("QEVnf96B2HIDRwCO2Y7f")
      .get()
      .then((snap) => {
        const data: ILesson = snap.data() as ILesson;
        if (data && data.words) setGermanWords(data.words);
        setSentences(data.sentences);
      });
  }, [db]);
  if (!germanWords || !sentences) return <Loading />;
  return (
    <div className="maxWidth1000 centerMargin">
      <LessonNav />
      <h1>Welcome To Your First Lesson In German!</h1>
      <p className="pb-sm pt-sm">Example sentences underneath:</p>

      {sentences.map((item) => (
        <p>{item.target}</p>
      ))}
    </div>
  );
};
