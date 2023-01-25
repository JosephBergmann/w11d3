
const SelectedCoffeeBean = (props) => {
  console.log(props)

  // return null;
  return (
    <div className="selected-coffee">
      <h2>{props.name}</h2>
    </div>
  )
}

export default SelectedCoffeeBean;