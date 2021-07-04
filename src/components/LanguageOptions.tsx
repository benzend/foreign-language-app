import { PageFlexCenteredLayout } from "../layouts/PageFlexCenteredLayout";
import { PageTitleLayout } from "../layouts/PageTitleLayout";
import { ButtonGroupLayout } from "../layouts/ButtonGroupLayout";
import { Button } from "./Button";
import { useAppSelector } from "../redux/hooks";
import { selectUser } from "../redux/userSlice";
import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../database/firebaseContext";
import Loading from "react-loading";
import { Link } from "react-router-dom";
import { getLanguages } from "../util/getLanguages";

export const LanguageOptions = () => {
  const user = useAppSelector(selectUser);
  const { db, functions } = useContext(FirebaseContext);
  const [languages, setLanguages] = useState<
    { id: string; language: string }[] | null
  >(null);
  useEffect(() => {
    if (!db) return;
    getLanguages(db, (data) => setLanguages(data));
  }, []);

  if (!functions || !languages || !db || !user.value) return <Loading />;

  return (
    <PageFlexCenteredLayout>
      {!user.value?.currentTargetLanguage ? null : (
        <div>
          <Link to="/settings" className="absolute top-0 left-0 m-5">
            <Button>Go Back</Button>
          </Link>
        </div>
      )}
      <PageTitleLayout>Please Select Target Language</PageTitleLayout>
      <ButtonGroupLayout>
        {languages.map((lang) => (
          <Button
            key={lang.id}
            onClick={async () => {
              await functions.httpsCallable("updateTargetLanguage")({
                id: user.value?.id,
                language: lang.language,
              });
              window.location.replace("/");
            }}
          >
            {lang.language}
          </Button>
        ))}
      </ButtonGroupLayout>
    </PageFlexCenteredLayout>
  );
};
