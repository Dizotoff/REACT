"use strict";

console.log("Opa");

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "THis is JSX fom app.js"
    ),
    React.createElement(
        "p",
        null,
        "YOMAYO"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item Two"
        )
    )
);

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Dmytro"
    ),
    React.createElement(
        "p",
        null,
        "Age: 21"
    ),
    React.createElement(
        "p",
        null,
        "Location: Helsinki"
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
