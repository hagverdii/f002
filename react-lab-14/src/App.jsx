import Profile from "./components/Profile";
import { students } from "./data/students";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Tələbələr</h1>

      {students.map((student) => (
        <Profile key={student.id} id={student.id} name={student.name} />
      ))}
    </div>
  );
}

export default App;
