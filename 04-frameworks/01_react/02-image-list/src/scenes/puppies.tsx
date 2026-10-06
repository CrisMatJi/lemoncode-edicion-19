import React from "react";
import { AppLayout } from "@/layouts";
import { PictureListContainer } from "@/pods/picture-list";

export const PuppiesPage: React.FC = () => {
  return (
    <AppLayout>
      <PictureListContainer category="puppies" />
    </AppLayout>
  );
};
