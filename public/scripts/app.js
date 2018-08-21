'use strict';

console.log("App.js is running");

var app = {
    title: 'King of joy',
    subtitle: 'White tower',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        ' ',
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? app.options : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var addOne = function addOne() {
    console.log('AddOne');
};

var minusOne = function minusOne() {
    console.log('minusOne');
};

var reset = function reset() {
    console.log('reset');
};

var count = 0;
var someId = 'myidhere';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'reset'
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
