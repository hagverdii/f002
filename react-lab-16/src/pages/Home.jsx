import {useSettings} from "../context/SettingsContext.jsx";

function Home() {
  const {words} = useSettings();
  
  return (
    <div>
      <h1>{words.title}</h1>
      <p>{words.description}</p>
    </div>
  );
}

export default Home;
