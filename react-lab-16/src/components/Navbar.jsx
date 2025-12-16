import {Link} from "react-router-dom";
import {useSettings} from "../context/SettingsContext.jsx";

function Navbar() {
  const {toggleTheme, changeLanguage, words} = useSettings();
  
  return (
    <nav>
      <Link to="/">{words.home}</Link>
      <Link to="/about">{words.about}</Link>
      
      <button style={{marginLeft: 'auto'}} onClick={() => changeLanguage("az")}>AZ</button>
      <button onClick={() => changeLanguage("en")}>EN</button>
      
      <button onClick={toggleTheme}>🌙 / ☀️</button>
    </nav>
  );
}

export default Navbar;
