import React from "react";
import { AppLayout } from "@/layouts";
import { PictureListContainer } from "@/pods/picture-list";

export const KittiesPage: React.FC = () => {
  return (
    <AppLayout>
      <PictureListContainer category="kitties" />
    </AppLayout>
  );
};
