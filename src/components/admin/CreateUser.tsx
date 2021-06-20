import React, { useState } from "react";
import { Firestore, Functions } from "../../database/firebaseContext";
import { Button } from "../Button";
import { Modal } from "../Modal";

interface ICreateUserProps {
  db: Firestore;
  functions: Functions;
}

export const CreateUser: React.FC<ICreateUserProps> = ({ db, functions }) => {
  const [editorOpen, setEditorOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAlreadyUsernameError, setIsAlreadyUsernameError] = useState(false);

  const closeHandler = () => {
    setEditorOpen(false);
    setIsAdmin(false);
    setUsername("");
    setPassword("");
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await functions.httpsCallable("addUser")({
      username,
      password,
    });
    if (!res) {
      setIsAlreadyUsernameError(true);
      return;
    }
    closeHandler();
  };

  if (isAlreadyUsernameError) {
    alert(
      "There's already a user with that username, please select something different."
    );
    setIsAlreadyUsernameError(false);
  }

  return (
    <div>
      <Modal isOpen={editorOpen} close={closeHandler}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="isAdmin">True</label>

          <input
            type="radio"
            name="isAdmin"
            id="isAdmin"
            checked={isAdmin}
            onChange={() => setIsAdmin(!isAdmin)}
          />

          <label htmlFor="isAdmin">False</label>
          <input
            type="radio"
            name="isAdmin"
            id="isAdmin"
            checked={!isAdmin}
            onChange={() => setIsAdmin(!isAdmin)}
          />

          <Button type="submit">Create User</Button>
        </form>
        <Button onClick={closeHandler}>Close Modal</Button>
      </Modal>
      <Button onClick={() => setEditorOpen(true)}>Create User</Button>
    </div>
  );
};
