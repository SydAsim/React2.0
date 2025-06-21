const { Children } = require("react");

function customRender(reactElement, container) {
    /*
    // Create the DOM element
    const domElement = document.createElement(reactElement.type);

    // Set innerHTML (content)
    domElement.innerHTML = reactElement.Children;

    // Set attributes
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    // Append to the container
    container.appendChild(domElement);
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    for (const prop in reactElement.props) {
       if (prop === 'Children') continue;
       domElement.setAttribute(prop , reactElement.props [prop])
    }
    container.appendChild(domElement);

}



// Define the react-like element
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Click to visit Google.com'
};

// Find the main container
const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
