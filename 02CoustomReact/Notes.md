React uses bundler so that is why when the function is made and then called like <App/> in the main.jsx 
so Bundler works Behind the Secene all the funtions and 
the reactElement into tags like this <h1> <a> <p> <div> <body> etc

from this e:g
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Click to visit Google.com'
}; 

to this <h1>