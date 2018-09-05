
class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
          localStorage.setItem('count', this.state.count);
        }
      }

      componentDidMount() {
        const json = localStorage.getItem('count');
        const count = parseInt(json, 10);
        if (!isNaN(count)){
        this.setState(() => {
            return {                                //old way
                count : count
            };
        });
    }
      }

    handleAddOne () {
        this.setState((prevState) => {
            return {
                count : prevState.count +1
            };
        });
    }
    handleMinusOne () {
        this.setState((prevState) => {
            return {
                count : prevState.count -1
            };
        });
    }
    handleReset () {
       this.setState(() => {
            return {                                //old way
                count : 0
            };
        });

        this.setState((prevState) => {
            return {                                //old way use when we neeed previous state
                count : prevState.count +1
            };
        });
      
        /* this.setState({
            count: 0                //use when we dont need acces to the previous state
        }); */
       
        
}

    render () {
        return (
            <div>
                    <h1>Counter: {this.state.count}</h1>
                    <button onClick={this.handleMinusOne}>-1</button>
                    <button onClick={this.handleReset}>RESET</button>
                    <button onClick={this.handleAddOne}>+1</button>
            </div>
        );
    }
}


Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter/>, document.getElementById('app'));




/*
let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
}

const minusOne = () => {
    count--;
    renderCounterApp();
}

const reset = () => {
    count = 0;
    renderCounterApp();
}




const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
            <button onClick={addOne}>+1</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot );
};

renderCounterApp();
*/