console.log("App.js is running");

var app = {
    title: 'King of joy',
   subtitle: 'White tower', 
   options: ['One', 'Two']
}

var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle  && <p> {app.subtitle}</p>}
        <p>{app.options.length > 0 ? app.options : 'No options' }</p>
        <ol>
            <li>Item one</li>
            <li>Item Two</li>
        </ol>
    </div>
);



var user = {
    name: 'Sasha',
    age: 144,
    location: 'Philadelphia'

};

function getLocation (location) {
    if (location) {
        return <p>Location: {location}</p>;
    } 
}

//if first parameter true - use left one, if false use right one 
//if first parameter true - use second parameter, if not use first one
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1> 
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot ); 