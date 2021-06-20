import React, { useContext } from "react";
import { FirebaseContext } from "../../database/firebaseContext";
import { PageHeaderLayout } from "../../layouts/PageHeaderLayout";
import { PageTitleLayout } from "../../layouts/PageTitleLayout";
import { Loading } from "../Loading";
import { CreateUser } from "../../components/admin/CreateUser";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

interface IAdminProps {}

export const Admin: React.FC<IAdminProps> = ({}) => {
  const { db, functions } = useContext(FirebaseContext);

  if (!db || !functions) return <Loading />;
  return (
    <div>
      <PageHeaderLayout>
        <PageTitleLayout>Admin</PageTitleLayout>
      </PageHeaderLayout>
      <Link to="/admin/lessonBuilder">
        <Button>Create Lesson</Button>
      </Link>
      <CreateUser db={db} functions={functions} />
    </div>
  );
};
