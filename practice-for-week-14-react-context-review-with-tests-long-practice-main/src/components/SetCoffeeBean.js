import { useCoffeeContext } from '../context/CoffeeContext';

const SetCoffeeBean = ({ coffeeBeans }) => {

  const { coffeeBean, setCoffeeBeanId} = useCoffeeContext()
      // cc.coffeeBeans.id = e.target.value

  const handleChange = (e) =>{
    e.preventDefault();
    // console.log(e.target.value)
    console.log(e.target.value)
    console.log(e.target.key)
    setCoffeeBeanId(e.target.value)
    // cc.coffeeBeans.id = e.target.value
    // e.target.value = e.target.key
    return null;
  }
  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select
        name="coffee-bean"
        value={coffeeBean.id}
        onChange={handleChange}
      >
        {coffeeBeans.map(bean => (
          <option
            key={bean.id}
            value={bean.id}
          >
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SetCoffeeBean;