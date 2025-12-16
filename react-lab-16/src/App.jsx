import {Routes, Route} from "react-router-dom";
import {SettingsProvider, useSettings} from "./context/SettingsContext.jsx";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import './App.css';

function AppContent() {
  const {theme} = useSettings();
  
  return (
    <div className={"app-container " + theme}>
      <Navbar/>
      <div style={{padding: "1rem"}}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <SettingsProvider>
      <AppContent/>
    </SettingsProvider>
  );
}

export default App;
