import React, { useContext } from "react";
import { FirebaseContext } from "../../database/firebaseContext";
import { PageHeaderLayout } from "../../layouts/PageHeaderLayout";
import { PageTitleLayout } from "../../layouts/PageTitleLayout";
import { Loading } from "../Loading";

interface IAdminProps {}

export const Admin: React.FC<IAdminProps> = ({}) => {
  const { db, functions: firebaseFunctions } = useContext(FirebaseContext);

  if (!db || !firebaseFunctions) return <Loading />;
  return (
    <div>
      <PageHeaderLayout>
        <PageTitleLayout>Admin</PageTitleLayout>
      </PageHeaderLayout>
    </div>
  );
};
