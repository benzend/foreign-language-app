import { FormEvent, useContext, useState } from "react";
import { Button } from "../../components/Button";
import { PageHeaderLayout } from "../../layouts/PageHeaderLayout";
import { PageTitleLayout } from "../../layouts/PageTitleLayout";
import { MaxWidthCenterLayout } from "../../layouts/MaxWidthCenterLayout";
import { Modal } from "../../components/Modal";
import { FirebaseContext } from "../../database/firebaseContext";
import { Loading } from "../Loading";
import { AdminNav } from "../../components/admin/AdminNav";

interface ILessonBuilderProps {}

export const LessonBuilder: React.FC<ILessonBuilderProps> = () => {
  const [targetLanguage, setTargetLanguage] = useState("");
  const [yourLanguage, setYourLanguage] = useState("english");
  const [difficulty, setDifficulty] = useState("C1");
  const [openWordAdder, setOpenWordAdder] = useState(false);
  const [newTargetWord, setNewTargetWord] = useState("");
  const [targetWords, setTargetWords] = useState<
    { target: string; translation: string }[]
  >([]);
  const [wordTranslation, setWordTranslation] = useState("");
  const [openSentenceAdder, setOpenSentenceAdder] = useState(false);
  const [newTargetSentence, setNewTargetSentence] = useState("");
  const [targetSentences, setTargetSentences] = useState<
    { target: string; translation: string }[]
  >([]);
  const [sentenceTranslation, setSentenceTranslation] = useState("");

  const { functions } = useContext(FirebaseContext);

  if (!functions) return <Loading />;

  const closeWordAdderHandler = () => {
    setOpenWordAdder(false);
    setNewTargetWord("");
    setWordTranslation("");
  };

  const closeSentenceAdderHandler = () => {
    setOpenSentenceAdder(false);
    setNewTargetSentence("");
    setSentenceTranslation("");
  };

  const submitNewWordHandler = (e: FormEvent) => {
    e.preventDefault();
    const target = newTargetWord;
    const translation = wordTranslation;
    setTargetWords([...targetWords, { target, translation }]);
    closeWordAdderHandler();
  };

  const submitNewSentenceHandler = (e: FormEvent) => {
    e.preventDefault();
    const target = newTargetSentence;
    const translation = sentenceTranslation;
    setTargetSentences([...targetSentences, { target, translation }]);
    closeSentenceAdderHandler();
  };

  const submitLessonHandler = async () => {
    await functions.httpsCallable("addNewLesson")({
      words: targetWords,
      sentences: targetSentences,
      targetLanguage,
      translationLanguage: yourLanguage,
      difficulty,
    });
    setTargetSentences([]);
    setTargetWords([]);
  };
  return (
    <div>
      <AdminNav />
      <Modal isOpen={openWordAdder} close={closeWordAdderHandler}>
        <form onSubmit={submitNewWordHandler}>
          <PageTitleLayout>New Word</PageTitleLayout>
          <label htmlFor="newTargetWord">Target Word: </label>
          <input
            autoFocus
            type="text"
            name="newTargetWord"
            id="newTargetWord"
            value={newTargetWord}
            onChange={(e) => setNewTargetWord(e.target.value)}
          />
          <label htmlFor="translation">Translation: </label>
          <input
            type="text"
            name="translation"
            id="translation"
            value={wordTranslation}
            onChange={(e) => setWordTranslation(e.target.value)}
          />
          <Button type="submit">Add Word</Button>
        </form>
      </Modal>
      <Modal isOpen={openSentenceAdder} close={closeSentenceAdderHandler}>
        <form onSubmit={submitNewSentenceHandler}>
          <PageTitleLayout>New Sentence</PageTitleLayout>
          <label htmlFor="newTargetSentence">Target Sentence: </label>
          <input
            type="text"
            name="newTargetSentence"
            id="newTargetSentence"
            value={newTargetSentence}
            onChange={(e) => setNewTargetSentence(e.target.value)}
          />
          <label htmlFor="translation">Translation: </label>
          <input
            type="text"
            name="translation"
            id="translation"
            value={sentenceTranslation}
            onChange={(e) => setSentenceTranslation(e.target.value)}
          />
          <Button type="submit">Add Sentence</Button>
        </form>
      </Modal>

      <label htmlFor="targetLanguage">Target Language: </label>
      <input
        type="text"
        name="targetLanguage"
        id="targetLanguage"
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
      />
      <label htmlFor="yourLanguage">Your Language: </label>
      <input
        type="t
      ext"
        name="yourLanguage"
        id="yourLanguage"
        value={yourLanguage}
        onChange={(e) => setYourLanguage(e.target.value)}
      />
      <label htmlFor="difficulty">Difficulty: </label>
      <input
        type="text"
        name="difficulty"
        id="difficulty"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      />
      <MaxWidthCenterLayout>
        <PageHeaderLayout>
          <PageTitleLayout>Your Lesson</PageTitleLayout>
        </PageHeaderLayout>
        <main>
          <Button onClick={() => setOpenWordAdder(true)}>Add New Word</Button>
          <Button onClick={() => setOpenSentenceAdder(true)}>
            Add New Sentence
          </Button>
        </main>
      </MaxWidthCenterLayout>
      {targetSentences.map((sentence) => (
        <div>
          <p>Target: {sentence.target}</p>
          <p>Translation: {sentence.translation}</p>
        </div>
      ))}
      {targetWords.map((word) => (
        <div>
          <p>Target: {word.target}</p>
          <p>Translation: {word.translation}</p>
        </div>
      ))}
      <Button onClick={submitLessonHandler}>Add Lesson</Button>
    </div>
  );
};
