import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-light text-center py-4 mt-5">
        <div className="container">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
