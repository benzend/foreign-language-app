import ReactLoading from "react-loading";

import { PageFlexCenteredLayout } from "../layouts/PageFlexCenteredLayout";

export const Loading = () => {
  return (
    <PageFlexCenteredLayout>
      <ReactLoading type="bubbles" color="var(--primary-color)" />
    </PageFlexCenteredLayout>
  );
};
