const appRoot = document.getElementById('app');
let text = ''
let visibility = false;
const show = () =>{
   visibility = true;
    text = 'Here is some text';
    
    render();
    
}

const hide = () => {
    text = '';
    visibility = false;
    render();
}

const render = () => {
    const template = (
        <div>
             <h1>Visibility Toggle</h1>
             <button onClick={text === '' ? show : hide}>{visibility ? 'Hide details' : 'Show details'}</button>
             {
                 <p>{text}</p>
             }
        </div>
    );
    ReactDOM.render(template, appRoot );
}


render();
