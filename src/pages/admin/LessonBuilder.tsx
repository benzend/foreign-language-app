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
  const [openWordAdder, setOpenWordAdder] = useState(false);
  const [newTargetWord, setNewTargetWord] = useState("");
  const [translation, setTranslation] = useState("");

  const closeWordAdderHandler = () => {
    setOpenWordAdder(false);
    setNewTargetWord("");
    setTranslation("");
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
            value={translation}
            onChange={(e) => setTranslation(e.target.value)}
          />
          <Button type="submit">Add Word</Button>
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
      <MaxWidthCenterLayout>
        <PageHeaderLayout>
          <PageTitleLayout>Your Lesson</PageTitleLayout>
        </PageHeaderLayout>
        <main>
          <Button onClick={() => setOpenWordAdder(true)}>Add New Word</Button>
        </main>
      </MaxWidthCenterLayout>
    </div>
  );
};
