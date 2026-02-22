import AnnouncementBar from "./components/announcement-bar/AnnouncementBar";
import Navbar from "./components/navbar/Navbar";

const Header = () => {
  return (
    <div className='Header'>
      <AnnouncementBar />
      <Navbar />
    </div>
  );
};

export default Header;
