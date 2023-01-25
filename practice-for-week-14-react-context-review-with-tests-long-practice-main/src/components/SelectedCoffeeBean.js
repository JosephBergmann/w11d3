import { useCoffeeContext } from "../context/CoffeeContext";

const SelectedCoffeeBean = () => {
  const coffeeContext = useCoffeeContext();
  return (
    <div className="selected-coffee">
      <h2>{coffeeContext.coffeeBean.name}</h2>
    </div>
  );
};

export default SelectedCoffeeBean;
