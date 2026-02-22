import React from "react";
import "./notFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className='notfound-container'>
      <div className='notfound-box'>
        <h1 className='notfound-code'>404</h1>
        <h2 className='notfound-title'>Page Not Found</h2>
        <p className='notfound-text'>The page you are looking for does not exist or has been moved.</p>
        <a href='/' className='notfound-button'>
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
