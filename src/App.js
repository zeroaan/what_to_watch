import React from "react";
import PropTypes from "prop-types";

const foodIlike = [
  {
    id: 1,
    name: "potato",
    rating: 3,
  },
  {
    id: 2,
    name: "tomato",
    rating: 4,
  },
  {
    id: 3,
    name: "banana",
    rating: 5,
  },
];

function Food({ name, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h3>this food is {rating} good!</h3>
      <hr />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} rating={dish.rating} />;
}

function App() {
  return <div>{foodIlike.map(renderFood)}</div>;
}

export default App;
