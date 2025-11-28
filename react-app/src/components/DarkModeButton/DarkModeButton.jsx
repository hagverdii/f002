import { useState } from "react";

const DarkModeButton = () => {
  const [isDark, setIsDark] = useState(false);

  const handleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return <button onClick={handleDarkMode}>{isDark ? "dark mode on" : "dark mode off"}</button>;
};

export default DarkModeButton;
