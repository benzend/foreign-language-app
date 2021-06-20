import { useState } from "react";
import { Button } from "../../components/Button";
import { PageHeaderLayout } from "../../layouts/PageHeaderLayout";
import { PageTitleLayout } from "../../layouts/PageTitleLayout";
import { MaxWidthCenterLayout } from "../../layouts/MaxWidthCenterLayout";
import { Modal } from "../../components/Modal";

interface ILessonBuilderProps {}

export const LessonBuilder: React.FC<ILessonBuilderProps> = () => {
  const [targetLanguage, setTargetLanguage] = useState("");
  const [yourLanguage, setYourLanguage] = useState("english");
  const [difficulty, setDifficulty] = useState("C1");
  const [openWordAdder, setOpenWordAdder] = useState(false);
  const [newTargetWord, setNewTargetWord] = useState("");
  const [wordTranslation, setWordTranslation] = useState("");
  const [openSentenceAdder, setOpenSentenceAdder] = useState(false);
  const [newTargetSentence, setNewTargetSentence] = useState("");
  const [sentenceTranslation, setSentenceTranslation] = useState("");

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
  return (
    <div>
      <Modal isOpen={openWordAdder} close={closeWordAdderHandler}>
        <form>
          <PageTitleLayout>New Word</PageTitleLayout>
          <label htmlFor="newTargetWord">Target Word: </label>
          <input
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
        <form>
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
    </div>
  );
};
