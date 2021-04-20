import React from 'react';
import foods from '../foods.json';
import FoodList from './FoodList';

class FoodBox extends React.Component {
  state = {
    foodList: [],
    originalFoodList: [...foods],
    name: '',
    calories: 0,
    image: '',
    quantity: 0,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAdd = (name, calories, image, quantity) => {
    const newFood = {
      name: name,
      calories: calories,
      image: image,
      quantity: quantity,
    };
    this.setState({ foodList: [newFood, ...this.state.foodList] });
    console.log('handle is working');
    console.log(this.state.foodList);
  };

  render() {
    return (
      <div className="container d-flex">
        <div className="">
          <h1 className="title">IronNutrition</h1>

          {foods.map((food) => {
            return (
              <FoodList
                name={food.name}
                calories={food.calories}
                image={food.image}
                quantity={food.quantity}
                onClick={this.handleAdd}
                onChange={this.handleChange}
              />
            );
          })}
        </div>

        <div class="column content">
          <h2 class="subtitle">Today's foods</h2>
          {this.state.foodList.map((food) => {
            return (
              <div>
                <ul>
                  <li>
                    {food.quantity} {food.name} = {food.calories}cal
                  </li>
                </ul>
              </div>
            );
          })}
          <strong>Total: cal = {/* * food.quantity */}</strong>
        </div>
      </div>
    );
  }
}

export default FoodBox;
