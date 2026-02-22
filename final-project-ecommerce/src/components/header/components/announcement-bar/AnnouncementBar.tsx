import React, { useState } from "react";
import "./announcementbar.css";

const AnnouncementBar: React.FC = () => {
  const [language, setLanguage] = useState("English");

  return (
    <div className='announcement-bar'>
      <p className='announcement-text'>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <a href='#' className='announcement-link'>
          ShopNow
        </a>
      </p>
      <div className='announcement-language'>
        <select className='language-select' value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value='English'>English</option>
          <option value='Russian'>Russian</option>
          <option value='Azerbaijani'>Azerbaijani</option>
        </select>
      </div>
    </div>
  );
};

export default AnnouncementBar;
