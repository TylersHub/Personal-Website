import React from "react";
import ProjPageLayout from "../components/ProjPageLayout";
import projImage1 from "../assets/BulkRenamer_Logo.png";

const Project1 = () => {
  return (
    <div>
      <ProjPageLayout
        projLayTitle="BulkRenamer"
        projLayDesc="A Renaming Tool for Windows"
        projLayHeight="50vh"
        projLaybtnLink=""
        projLaybtnText="Download"
        projLayImage={projImage1}
        projLayBG="main-blue"
      />
    </div>
  );
};

export default Project1;
