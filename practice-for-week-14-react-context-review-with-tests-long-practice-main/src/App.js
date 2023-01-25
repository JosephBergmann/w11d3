import SelectedCoffeeBean from "./components/SelectedCoffeeBean";
import SetCoffeeBean from "./components/SetCoffeeBean";
import CoffeeProvider, { CoffeeContext } from "./context/CoffeeContext";
import beans from './mockData/coffeeBeans.json';

function App() {
  // const bob = JSON.parse(beans.stringify());
  return (
    <>
      <h1>Welcome to Coffee App</h1>
        <SelectedCoffeeBean />
        <SetCoffeeBean coffeeBeans={beans}/>
    </>
  );
}

export default App;
