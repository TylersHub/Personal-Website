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
        projLaybtnLink="https://github.com/TylersHub/BulkRenamer/releases/download/v2.2.2/BulkRenamer_Release_x64.exe"
        projLaybtnText="Download"
        projLaybtnClass="button-hover-animation"
        projLaybtn2Link="https://github.com/TylersHub/BulkRenamer"
        projLaybtn2Text="GitHub"
        projLaybtn2Class="button-hover-animation"
        projLayImage={projImage1}
        projLayBG="main-blue"
      />
    </div>
  );
};

export default Project1;
