import ProjPageLayout from "../components/ProjPageLayout";
import projImage1 from "../assets/BulkRenamer_Logo.png";

const Project1 = () => {
  return (
    <div>
      <ProjPageLayout
        projLayTitle="BulkRenamer"
        projLayDesc="A Windows tool made in C++ with libraries such as OpenGL, GLFW, ImGui, GLM, and Boost in Visual
Studio that renames multiple files simultaneously. Offers different renaming options for flexibility, designed as a user-friendly GUI using OpenGL to provide an intuitive context window."
        projLayHeight="60vh"
        projLaybtnLink="https://github.com/TylersHub/BulkRenamer/releases/download/v2.2.2/BulkRenamer_Release_x64.exe"
        projLaybtnText="Download"
        projLaybtnClass="button-hover-animation"
        projLaybtn2Link="https://github.com/TylersHub/BulkRenamer"
        projLaybtn2Text="GitHub"
        projLaybtn2Class="button-hover-animation"
        projLayImage={projImage1}
        projLayImageWidth="55%"
        projLayBG="main-blue"
      />
    </div>
  );
};

export default Project1;
