import axios from "axios";
import { Dispatch } from "redux";
import { Firestore } from "../database/firebaseContext";
import { IUser } from "../interfaces/IUser";
import { addUser } from "../redux/userSlice";

export async function getUser(
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
  }
  callback(id);
}
