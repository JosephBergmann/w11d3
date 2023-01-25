import { useCoffeeContext } from "../context/CoffeeContext";

const SelectedCoffeeBean = () => {
  const coffeeContext = useCoffeeContext();
  console.log(coffeeContext);
  return (
    <div className="selected-coffee">
      <h2>{coffeeContext.coffeeBean.name}</h2>
    </div>
  );
};

export default SelectedCoffeeBean;
