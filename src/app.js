
class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put the life in the hands of computer';
        const options = ['Thing one', 'Thing two', 'Thing three'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick(){
        alert('HandlePick');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

class Option extends React.Component{
  
    render() {
        return (
            <div>
                {this.props.optionText}
                
            </div>
        );
    }
}
class Options extends React.Component{
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        console.log(this.props.options);
    }
    render() {

        return (
            <div>
                    <button onClick={this.handleRemoveAll}>REmove all</button>
                    {this.props.options.map((option) =>{
                        return <Option key={option} optionText={option}/>
                    })}
            </div>
        );
    }
}



class AddOption extends React.Component {

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option) {
            alert('We got a value');
        } else {
            alert('NO VALUE');
        }

    }
    render() {
        return (
            <div>
                <form onSubmit ={this.handleAddOption}>
                <input type="text" name="option" />
                <button >Add Option</button>
            </form>
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));