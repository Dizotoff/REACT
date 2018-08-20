console.log("Opa");

var template = (
    <div>
        <h1>THis is JSX fom app.js</h1>
        <p>YOMAYO</p>
        <ol>
            <li>Item one</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var templateTwo = (
    <div>
        <h1>Dmytro</h1>
        <p>Age: 21</p>
        <p>Location: Helsinki</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot ); 