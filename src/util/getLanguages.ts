import { Firestore } from "../database/firebaseContext";

export async function getLanguages(
  db: Firestore,
  callback: (data: { id: string; language: string }[]) => void
) {
  await db
    .collection("targetLanguages")
    .get()
    .then((snap) =>
      callback(
        snap.docs.map(
          (doc) =>
            ({ id: doc.id, ...doc.data() } as {
              id: string;
              language: string;
            })
        )
      )
    );
}
