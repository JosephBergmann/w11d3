import SelectedCoffeeBean from "./components/SelectedCoffeeBean";
import CoffeeProvider, { CoffeeContext } from "./context/CoffeeContext";

function App() {
  return (
    <>
      <h1>Welcome to Coffee App</h1>
        <SelectedCoffeeBean />
      </>
  );
}

export default App;
