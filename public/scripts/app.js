'use strict';

var appRoot = document.getElementById('app');
var text = '';
var visibility = false;
var show = function show() {
    visibility = true;
    text = 'Here is some text';

    render();
};

var hide = function hide() {
    text = '';
    visibility = false;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: text === '' ? show : hide },
            visibility ? 'Hide details' : 'Show details'
        ),
        React.createElement(
            'p',
            null,
            text
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
