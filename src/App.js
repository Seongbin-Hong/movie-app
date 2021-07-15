import React from "react";
import PropTypes from "prop-types";

/*// function component
function App() {
    return (
        <div>
            <h2>Dogs!</h2>
            {sampleList.map(renderDog)}
        </div>
    );
}*/

class App extends React.Component {
    state = {
        count: 0,
    };
    add = () => {
        console.log("add");
        this.setState((current) => ({ count: current.count + 1 }));
    };
    minus = () => {
        console.log("minus");
        this.setState((current) => ({ count: current.count - 1 }));
    };
    render() {
        return (
            <div>
                <h1>The number : {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}

export default App;
