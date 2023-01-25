import coffeeBeans from "./mockData/coffeeBeans.json";
import SelectedCoffeeBean from "./components/SelectedCoffeeBean";
import CoffeeProvider, { CoffeeContext } from "./context/CoffeeContext";
import {useState} from 'react'
function App() {

  // console.log(CoffeeContext.Consumer);
  const [coffeeBean, setCoffeeBeanId] = useState(coffeeBeans[0])
  return (
    <>
      <h1>Welcome to Coffee App</h1>
        <SelectedCoffeeBean name={coffeeBean.name}/>
    </>
  );
}

export default App;