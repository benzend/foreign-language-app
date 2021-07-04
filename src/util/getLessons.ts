import { Firestore } from "../database/firebaseContext";
import { ILesson } from "../interfaces/ILesson";

export async function getLessons(
  db: Firestore,
  lang: string,
  callback: (data: ILesson[] | null) => void
) {
  await db
    .collection("targetLanguages")
    .where("language", "==", lang)
    .get()
    .then(async (snap) => {
      if (snap.empty) {
        callback(null);
        return;
      }
      await snap.docs[0].ref
        .collection("lessons")
        .get()
        .then((snap) =>
          callback(
            snap.docs.map((doc) => ({ id: doc.id, ...doc.data() } as ILesson))
          )
        );
    });
}
