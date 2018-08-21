console.log("App.js is running");

const app = {
    title: 'King of joy',
   subtitle: 'White tower', 
   options: ['One', 'Two']
}

const template = (
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

const addOne = () => {
    console.log('AddOne');
}

const minusOne = () => {
    console.log('minusOne');
}

const reset = () => {
    console.log('reset');
}

let count = 0;
const someId = 'myidhere';
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
        <button onClick={addOne}>+1</button>
    </div>
);



const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot ); 