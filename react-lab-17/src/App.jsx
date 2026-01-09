import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { deselectAllFruits, selectAllFruits, selectFruit } from "./stores/features/fruits/fruitsSlice";

const App = () => {
  const dispatch = useDispatch();
  const allFruitsList = useSelector((state) => state.fruits.allFruitsList);
  const selectedFruitsList = useSelector((state) => state.fruits.selectedFruitsList);

  return (
    <div className='app-container'>
      <h2>Meyvə seçmə tətbiqi</h2>
      <div className='cards-container'>
        <div>
          <h3>Meyvə kartları</h3>
          <div>
            <button onClick={() => dispatch(selectAllFruits())}>Select All</button>
            <button onClick={() => dispatch(deselectAllFruits())}>Delete All</button>
          </div>
          <div className='fruit-buttons'>
            {allFruitsList.map((fruit) => (
              <button key={fruit} onClick={() => dispatch(selectFruit(fruit))}>
                {fruit}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3>Seçilmiş meyvələr</h3>
          <div>
            {selectedFruitsList.map((fruit) => (
              <div key={fruit + "selected"}>{fruit}</div>
            ))}
            {selectedFruitsList.length <= 0 && <div style={{ color: "gray" }}>Siyahı Boşdur</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
