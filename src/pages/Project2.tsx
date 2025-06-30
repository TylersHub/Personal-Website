import ProjPageLayout from "../components/ProjPageLayout";

const Project2 = () => {
  return (
    <div>
      <ProjPageLayout
        projLayTitle="Pricetunity"
        projLayDesc="A product scraping website that finds the best prices across the web, includes AI features and uses sentiment analysis to help users make informed decisions when purchasing. Built with Python, TypeScript, React, Vite, and Bright Data, all within VS code."
        projLayHeight=""
        projLaybtnLink="https://pricetunity.com/"
        projLaybtnText="Visit"
        projLaybtnClass="button-hover-animation"
        projLaybtn2Link="https://github.com/TylersHub/Web-Scraper-Project"
        projLaybtn2Text="GitHub"
        projLaybtn2Class="button-hover-animation"
        projLayBG="main-dark min-vh-100"
      />
    </div>
  );
};

export default Project2;
