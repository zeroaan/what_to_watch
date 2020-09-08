import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <h1>{isLoading ? "Loading..." : "We are ready"}</h1>
      </div>
    );
  }
}
export default App;

/*
class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };

  render() {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
*/

/*
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
*/
