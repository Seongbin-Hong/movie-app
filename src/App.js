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
        isLoading: true,
        movie: [],
    };
    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 6000);
    }
    render() {
        const { isLoading } = this.state;
        return <div>{isLoading ? "Loding..." : "We are ready."}</div>;
    }
}

export default App;
