import React from "react";
import PropTypes from "prop-types";

const sampleList = [
    {
        id: 1,
        name: "A",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAX3q2a4UQWPdtCyRlQ0x3K739NnSbBGlLww&usqp=CAU",
        rating: 3.3,
    },
    {
        id: 2,
        name: "B",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWlUy0dR8BwoUj_qcn0dsun0B-BhvDE4bs4g&usqp=CAU",
        rating: 2.1,
    },
    {
        id: 3,
        name: "C",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT84PDno6VM3jICtnbLLJARMtN4FqxjM_joqQ&usqp=CAU",
        rating: 4.5,
    },
    {
        id: 4,
        name: "D",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1W1mW10fO564H87A2mQ7IaNyi0Rmi4xBFlg&usqp=CAU",
        rating: 4.3,
    },
    {
        id: 5,
        name: "E",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgGifpWxee7EoLtgJncUNaOA-GNh2N1uekAA&usqp=CAU",
        rating: 3.1,
    },
];

function Dog({ name, image, rating }) {
    return (
        <div>
            <h4>
                This is {name}
                <span> {rating}/5.0</span>
            </h4>
            <img src={image} alt={name} />
        </div>
    );
}

Dog.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    rating: PropTypes.number,
};

function renderDog(item) {
    return (
        <Dog
            key={item.id}
            name={item.name}
            image={item.image}
            rating={item.rating}
        />
    );
}

// Main function
function App() {
    return (
        <div>
            <h2>Dogs!</h2>
            {sampleList.map(renderDog)}
        </div>
    );
}

export default App;
