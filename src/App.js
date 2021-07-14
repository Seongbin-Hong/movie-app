import React from "react";

function Sample({ name }) {
    return <h3>This is {name}</h3>;
}

const sampleList = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 4, name: "D" },
];

function renderSample(item) {
    return <Sample key={item.id} name={item.name} />;
}

function App() {
    return (
        <div>
            <h2>Hello!</h2>
            {sampleList.map(renderSample)}
        </div>
    );
}

export default App;
