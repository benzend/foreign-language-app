import { Dispatch } from "redux";
import { Firestore } from "../database/firebaseContext";
import { IUser } from "../interfaces/IUser";
import { addUser } from "../redux/userSlice";

export async function updateUser(
  id: string | null,
  db: Firestore,
  dispatch: Dispatch,
  callback: (id: string | null) => void
) {
  if (id) {
    const user = await db
      .collection("users")
      .doc(id)
      .get()
      .then((doc) => ({ id: doc.id, ...doc.data() } as IUser));
    dispatch(addUser(user));
    callback(id);
    return user;
  }
  callback(id);
}
